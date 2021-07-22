import { SET_SELECTED_LANGUAGE } from "../types"


const initialState = {
	selectedLanguage: "en"
}

export default function quizReducer(
	state = initialState,
	action
) {
	switch (action.type) {
		case SET_SELECTED_LANGUAGE:
			return {
				...state,
				selectedLanguage: action.payload,
			}
	
		default:
			return state
	}
}
