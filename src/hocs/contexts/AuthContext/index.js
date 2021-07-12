import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react"
import { auth } from "config/firebase"
import firebase from "firebase"
import Loader from "components/common/UI/Loader"
import { useHistory } from "react-router-dom"

const AuthContext = createContext()

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)
	const router = useHistory()

	const signup = (email, password) => {
		return auth.createUserWithEmailAndPassword(
			email,
			password
		)
	}

	const setLoginParamsAndRedirect = useCallback(() => {
		router.push("/")
		localStorage.setItem("isLogin", "true")
	}, [router])

	const setLogoutParamsAndRedirect = useCallback(
		(user, status, route) => {
			localStorage.setItem("isLogin", status)
			setCurrentUser(user)
			setLoading(false)
			route && router.push(route)
		},
		[router]
	)

	const loginWithGoogle = async () => {
		let provider = new firebase.auth.GoogleAuthProvider()

		return firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				if (result.user) {
					setLoginParamsAndRedirect()
				} else {
					setLogoutParamsAndRedirect(
						null,
						false,
						"/login"
					)
				}
			})
			.catch((e) => {
				console.log(e)
			})
	}

	const login = async (email, password) => {
		return auth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				setLoginParamsAndRedirect()
				console.log("Logined")
			})
			.catch((e) => {
				console.log(e)
			})
	}
	const logout = async() => {
		return auth.signOut().then(() => {
			setLogoutParamsAndRedirect(
				null,
				false,
				"/login"
			)
		})
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(
			(user) => {
				if (user) {
					setLogoutParamsAndRedirect(user, true)
				} else {
					setLogoutParamsAndRedirect(
						user,
						false,
						"/login"
					)
				}
			}
		)
		return unsubscribe
	}, [setLogoutParamsAndRedirect])

	const value = {
		currentUser,
		signup,
		login,
		logout,
		loginWithGoogle,
	}
	console.log("loading", loading)
	return (
		<AuthContext.Provider value={value}>
			{loading && <Loader />}
			{children}
		</AuthContext.Provider>
	)
}
