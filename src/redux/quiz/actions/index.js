import axios from "api/quiz"
import {
	FETCH_QUIZES_ERROR,
	FETCH_QUIZES_START,
	FETCH_QUIZES_SUCCESS,
	FETCH_QUIZ_SUCCESS,
	FINISH_QUIZ,
	QUIZ_NEXT_QUESTION,
	QUIZ_RETRY,
	QUIZ_SET_STATE,
} from "../types"
import { alertError } from "components/common/UI/Alert"

export function fetchQuizes() {
	return async (dispatch) => {
		dispatch(fetchQuizesStart())
		try {
			const response = await axios.get("quiz.json")

			const quizes = []

			Object.entries(response.data).forEach((entry, index) => {
				quizes.push({
					id: entry[0],
					name: `${index + 1}. ${entry[1][0].question}`,
				})
			})

			dispatch(fetchQuizesSuccess(quizes))
		} catch (e) {
			dispatch(fetchQuizesError(e))
			alertError(e)
		}
	}
}

export function fetchQuizById(quizId) {
	return async (dispatch) => {
		dispatch(fetchQuizesStart())
		try {
			const response = await axios.get(`quiz/${quizId}.json`)
			const quiz = response.data

			dispatch(fetchQuizSuccess(quiz))
		} catch (e) {
			dispatch(fetchQuizesError(e))
			alertError(e)
		}
	}
}

export function fetchQuizesStart() {
	return {
		type: FETCH_QUIZES_START,
	}
}

export function fetchQuizesSuccess(quizes) {
	return {
		type: FETCH_QUIZES_SUCCESS,
		quizes,
	}
}

export function fetchQuizSuccess(quiz) {
	return {
		type: FETCH_QUIZ_SUCCESS,
		quiz,
	}
}

export function fetchQuizesError(e) {
	return {
		type: FETCH_QUIZES_ERROR,
		error: e,
	}
}

export function quizSetState(answerState, results) {
	return {
		type: QUIZ_SET_STATE,
		answerState,
		results,
	}
}

export function finishQuiz() {
	return {
		type: FINISH_QUIZ,
	}
}

export function retryQuiz() {
	return {
		type: QUIZ_RETRY,
	}
}

export function quizNextQuestion(number) {
	return {
		type: QUIZ_NEXT_QUESTION,
		number,
	}
}

export function quizAnswerClick(answerId, state) {
	return (dispatch) => {
		function timeoutAfterAnswerClicked(time = 1000) {
			const timeout = window.setTimeout(() => {
				if (isQuizFinished(state)) {
					dispatch(finishQuiz())
				} else {
					dispatch(quizNextQuestion(state.activeQuestion + 1))
				}

				window.clearTimeout(timeout)
			}, time)
		}

		if (state.answerState) {
			const key = Object.keys(state.answerState)[0]
			if (state.answerState[key] === "success" || state.answerState[key] === "error") {
				return
			}
		}
		const question = state.quiz[state.activeQuestion]
		const results = state.results

		if (+question.rightAnswerId === +answerId) {
			if (!results[question.id]) {
				results[question.id] = "success"
			}

			dispatch(quizSetState({ [answerId]: "success" }, results))

			timeoutAfterAnswerClicked()
		} else {
			results[question.id] = "error"
			//here i need to do smth to add success class to the answer[rightAnswerId]
			dispatch(quizSetState({[answerId]: "error" }, results))
				dispatch(quizSetState({[answerId]: "error", [question.rightAnswerId]: "success" }, results))

			timeoutAfterAnswerClicked(1200)
		}
	}
}

function isQuizFinished(state) {
	return state.activeQuestion + 1 === state.quiz.length
}
