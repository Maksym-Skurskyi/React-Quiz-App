import axios from "../../../api/quiz"
import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "../types"

export function createQuizQuestion(item) {
	return {
		type: CREATE_QUIZ_QUESTION,
		item,
	}
}

export function resetQuizCreation() {
	return {
		type: RESET_QUIZ_CREATION
	}
}

export function finishCreateQuiz(quiz) {
	return async (dispatch) => {
		await axios.post("quiz.json", quiz)
		dispatch(resetQuizCreation())
	}
}
