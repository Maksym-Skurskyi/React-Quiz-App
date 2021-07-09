import axios from "../../../api/quiz"
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

export function finishCreateQuiz(quiz) {
	return async (dispatch) => {
		dispatch(finishCreateQuizStart())
		try {
			await axios.post("quiz.json", quiz)
			dispatch(finishCreateQuizSuccess())
		} catch (e) {
			dispatch(finishCreateQuizError(e))
		}
	}
}
