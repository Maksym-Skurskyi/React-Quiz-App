import { combineReducers } from "redux"
import createReducer from "./create/reducers"
import quizReducer from "./quiz/reducers"

const rootReducer = combineReducers({
	quizes: quizReducer,
	create: createReducer,
})

export default rootReducer