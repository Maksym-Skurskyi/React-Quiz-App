import { lazy } from "react"

// Common routes with using React code splitting approach
const Login = lazy(() =>
	import("pages/common/Login")
)
const Register = lazy(() =>
	import("pages/common/Register")
)

export const commonRoutes = [
	{
		component: Login,
		path: "/login",
		exact: false,
	},
	{
		component: Register,
		path: "/register",
		exact: false,
	}
]
