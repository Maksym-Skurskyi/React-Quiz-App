import { combineReducers } from "redux"
import createReducer from "./quizCreate/reducers"
import quizReducer from "./quiz/reducers"
import languageReducer from "./language/reducers"


const rootReducer = combineReducers({
	quizes: quizReducer,
	create: createReducer,
	language: languageReducer,
})

export default rootReducer