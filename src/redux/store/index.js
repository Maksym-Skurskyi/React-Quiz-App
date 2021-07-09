import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "../"

const middleware = composeWithDevTools(
	applyMiddleware(thunk)
)

export const store = createStore(
	rootReducer,
	middleware
)
