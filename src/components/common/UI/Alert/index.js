import { toast } from "react-toastify"

//React-Toastify settings
export const alertBody = {
	position: "top-center",
	autoClose: 2000,
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