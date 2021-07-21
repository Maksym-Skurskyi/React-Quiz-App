import { commonMenu } from "./commonMenu"

export const publicMenu = [
	...commonMenu,
	{
		to: "/login",
		label: "Login",
		exact: false,
	},
	{
		to: "/register",
		label: "Register",
		exact: false,
	},
]
