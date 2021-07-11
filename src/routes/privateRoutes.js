import { lazy } from "react"

const QuizCreator = lazy(() =>
	import("pages/common/QuizCreator")
)
const Quiz = lazy(() =>
	import("pages/common/Quiz")
)
const QuizList = lazy(() =>
	import("pages/common/QuizList")
)
const NotFound = lazy(() =>
	import("pages/common/NotFound")
)

export const privateRoutes = [
	{
		component: QuizCreator,
		path: "/quiz-creator",
		exact: false,
	},
	{
		component: Quiz,
		path: "/quiz/:id",
		exact: false,
	},
	{
		component: QuizList,
		path: "/",
		exact: true,
	},
	{
		component: NotFound,
	},
]
