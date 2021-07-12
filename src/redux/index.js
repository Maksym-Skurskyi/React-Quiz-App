import { combineReducers } from "redux"
import createReducer from "./quizCreate/reducers"
import quizReducer from "./quiz/reducers"

const rootReducer = combineReducers({
	quizes: quizReducer,
	create: createReducer,
})

export default rootReducer