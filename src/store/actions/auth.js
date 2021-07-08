import axios from "axios"
import { AUTH_LOGOUT, AUTH_SUCCESS } from "./actionTypes"

export function auth(email, password, isLogin) {
	return async dispatch => {
		const authData = {
			email,
			password,
			returnSecureToken: true,
		}
		const { REACT_APP_SIGNUP, REACT_APP_SIGNIN } = process.env
		let url = REACT_APP_SIGNUP

		if (isLogin) {
			url = REACT_APP_SIGNIN
		}

		const response = await axios.post(url, authData)
		const data = response.data


		dispatch(authSuccess(data.idToken))
		dispatch(autoLogout(data.expiresIn))
	}
}

export function autoLogin() {
	return dispatch => {
		const token = localStorage.getItem("token")
		if (!token) {
			dispatch(logout())
		} else {
			const expirationDate = new Date(localStorage.getItem("expirationDate"))
			if (expirationDate <= new Date()) {
				dispatch(logout())
			} else {
				dispatch(authSuccess(token))
				dispatch(
					autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
				)
			}
		}
	}
}

export function authSuccess(token) {
	return {
		type: AUTH_SUCCESS,
		token,
	}
}

export function autoLogout(time) {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, time * 1000)
	}
}

export function logout() {
	localStorage.removeItem("token")
	localStorage.removeItem("userId")
	localStorage.removeItem("expirationDate")
	return {
		type: AUTH_LOGOUT,
	}
}
