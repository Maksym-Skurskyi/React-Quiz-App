import { lazy } from "react"

const QuizCreator = lazy(() =>
	import("pages/common/QuizCreator")
)

export const privateRoutes = [
	{
		component: QuizCreator,
		path: "/quiz-creator",
		exact: false,
		isAdminAuth: true,
	},
]
