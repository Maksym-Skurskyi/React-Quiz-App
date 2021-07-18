import {
	CREATE_QUIZ_QUESTION,
	FINISH_CREATE_QUIZ_ERROR,
	FINISH_CREATE_QUIZ_START,
	FINISH_CREATE_QUIZ_SUCCESS,
} from "../types"

const initialState = {
	quiz: [],
}

export default function createReducer(
	state = initialState,
	action
) {
	switch (action.type) {
		case CREATE_QUIZ_QUESTION:
			return {
				...state,
				quiz: [...state.quiz, action.item],
			}
		case FINISH_CREATE_QUIZ_START:
			return {
				...state,
				loading: true,
			}
		case FINISH_CREATE_QUIZ_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case FINISH_CREATE_QUIZ_SUCCESS:
			return {
				...state,
				quiz: [],
				loading: false,
			}
		default:
			return state
	}
}
