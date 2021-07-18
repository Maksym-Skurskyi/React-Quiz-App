import { lazy } from "react"

const Quiz = lazy(() =>
	import("pages/common/Quiz")
)
const QuizList = lazy(() =>
	import("pages/common/QuizList")
)
const NotFound = lazy(() =>
	import("pages/common/NotFound")
)

export const publicRoutes = [
	{
		component: QuizList,
		path: "/",
		exact: true,
	},
	{
		component: Quiz,
		path: "/quiz/:id",
		exact: true,
	},
	{
		component: NotFound,
	},
]
