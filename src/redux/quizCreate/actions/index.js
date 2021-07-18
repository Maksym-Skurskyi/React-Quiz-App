import {
	alertError,
	alertSuccess,
} from "components/common/UI/Alert"
import { writeQuiz } from "config/firebaseDatabase"
import {
	CREATE_QUIZ_QUESTION,
	FINISH_CREATE_QUIZ_ERROR,
	FINISH_CREATE_QUIZ_START,
	FINISH_CREATE_QUIZ_SUCCESS,
} from "../types"

export function createQuizQuestion(item) {
	return {
		type: CREATE_QUIZ_QUESTION,
		item,
	}
}

export function finishCreateQuizStart() {
	return {
		type: FINISH_CREATE_QUIZ_START,
	}
}

export function finishCreateQuizError(error) {
	return {
		type: FINISH_CREATE_QUIZ_ERROR,
		payload: error,
	}
}

export function finishCreateQuizSuccess() {
	return {
		type: FINISH_CREATE_QUIZ_SUCCESS,
	}
}

export function finishCreateQuiz(values) {
	return async (dispatch) => {
		dispatch(finishCreateQuizStart())
		try {
			const questions = values.questions.map(
				(question, index) => {
					return {
						question: question.question,
						id: index + 1,
						rightAnswerId: +question.rightAnswerId,
						answers: values.questions[
							index
						].answers.map((answer, i) => {
							return {
								text: answer.text.trim(),
								id: i,
							}
						}),
					}
				}
			)

			await writeQuiz(questions)
			dispatch(finishCreateQuizSuccess())
			alertSuccess(
				"Quiz has been successfully created!"
			)
		} catch (e) {
			dispatch(finishCreateQuizError(e))
			alertError(e)
		}
	}
}
