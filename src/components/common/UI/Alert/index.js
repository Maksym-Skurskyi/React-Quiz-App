import { toast } from "react-toastify"

//React-Toastify settings
export const alertBody = {
	position: "top-center",
	autoClose: 5000,
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
	toast.error(text, alertBody)
}

export const alertWarn = (text) => {
	toast.warn(text, alertBody)
}

export const alertInfo = (text) => {
	toast.info(text, alertBody)
}