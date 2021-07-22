import { SET_SELECTED_LANGUAGE } from "../types/index"

export function setSelectedLanguage(language) {
	localStorage.setItem("locale", language)
	return {
		type: SET_SELECTED_LANGUAGE,
		payload: language,
	}
}
