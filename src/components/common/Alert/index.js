import { toast } from "react-toastify"

//React-Toastify settings
export const alertBody = {
	position: "top-center",
	autoClose: 3000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
}

export const alertSuccess = (text) => {
	toast.success(text, alertBody)
}

export const alertError = (text) => {
	toast.errow(text, alertBody)
}

export const alertWarn = (text) => {
	toast.warn(text, alertBody)
}

export const alertSignInSuccess = () =>
	toast.success(
		"Now you are signed in",
		alertBody
	)

export const alertSignOutSuccess = () =>
	toast.warn("Now you are signed out", alertBody)

export const alertSignUpSuccess = () =>
	toast.success(
		"Now you are signed up",
		alertBody
	)
export const alertSignInError = () =>
	toast.error(
		"Something went wrong while signing in",
		alertBody
	)

export const alertSignOutError = () =>
	toast.error(
		"Something went wrong while signing out",
		alertBody
	)

export const alertSignUpError = () =>
	toast.error(
		"Something went wrong while signing up",
		alertBody
	)
