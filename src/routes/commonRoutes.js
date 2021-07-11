import { lazy } from "react"

// Common routes with using React code splitting approach
const Login = lazy(() =>
	import("pages/common/Login")
)
const Register = lazy(() =>
	import("pages/common/Register")
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

export const commonRoutes = [
	{
		component: Register,
		path: "/register",
		exact: false,
	},
	{
		component: Login,
		path: "/login",
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
