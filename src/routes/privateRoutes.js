import { lazy } from "react"

const QuizCreator = lazy(() => import("../pages/common/QuizCreator/QuizCreator"))
const Quiz = lazy(() => import("../pages/common/Quiz/Quiz"))
const Logout = lazy(() => import("../components/Logout/Logout"))
const QuizList = lazy(() => import("../pages/common/QuizList/QuizList"))

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
		component: Logout,
		path: "/logout",
		exact: false,
	},
	{
		component: QuizList,
		path: "/",
		exact: true,
	},
]
