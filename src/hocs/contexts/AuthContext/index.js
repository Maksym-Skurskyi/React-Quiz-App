import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react"
import { useHistory } from "react-router-dom"
import {
	firebaseAuth,
	githubAuthProvider,
	googleAuthProvider,
} from "config/firebase"
import {
	alertSuccess,
	alertError,
	alertWarn,
	alertInfo,
} from "components/common/UI/Alert"
const AuthContext = createContext()

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)
	const router = useHistory()

	const setLoginParamsAndRedirect = useCallback(() => {
		router.push("/")
		localStorage.setItem("isLogin", 1)
	}, [router])

	const setLogoutParamsAndRedirect = useCallback(
		(user, status, route, remove = false) => {
			if (remove) {
				localStorage.removeItem("isLogin")
			} else {
				localStorage.setItem("isLogin", status)
			}
			setCurrentUser(user)
			setLoading(false)
			route && router.push(route)
		},
		[router]
	)

	useEffect(() => {
		const unsubscribe = firebaseAuth.onAuthStateChanged(
			(user) => {
				if (user) {
					setLogoutParamsAndRedirect(user, 1)
				} else {
					setLogoutParamsAndRedirect(
						user,
						0,
						"/login",
						true
					)
				}
			}
		)
		return unsubscribe
	}, [setLogoutParamsAndRedirect])

	const signup = async (email, password) => {
		return firebaseAuth
			.createUserWithEmailAndPassword(
				email,
				password
			)
			.then((result) => {
				if (result.user) {
					alertSuccess("Now you are signed up")
					setLoginParamsAndRedirect()
				} else {
					alertWarn(
						"Something went wrong while signing up"
					)
					setLogoutParamsAndRedirect(
						null,
						0,
						"/login"
					)
				}
			})
			.catch(() =>
				alertError(
					"Something went wrong while signing up"
				)
			)
	}

	const socialMediaAuth = async (provider) => {
		return await firebaseAuth
			.signInWithPopup(provider)
			.then((result) => {
				if (result.user) {
					alertSuccess("Now you are signed in")
					setLoginParamsAndRedirect()
				} else {
					alertError(
						"Something went wrong while signing in"
					)
					setLogoutParamsAndRedirect(
						null,
						0,
						"/login"
					)
				}
			})
			.catch(() => {
				alertError(
					"Something went wrong while signing in"
				)
			})
	}

	const signInWithGithub = async () =>
		await socialMediaAuth(githubAuthProvider)
	const signInWithGoogle = async () =>
		await socialMediaAuth(googleAuthProvider)

	const login = async (email, password) => {
		return firebaseAuth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				alertSuccess("You are signed-in now")
				setLoginParamsAndRedirect()
			})
			.catch(() => {
				alertError(
					"Something went wrong while signing in"
				)
			})
	}
	const logout = async () => {
		return firebaseAuth
			.signOut()
			.then(() => {
				alertInfo("You are signed-out now")
				setLogoutParamsAndRedirect(
					null,
					0,
					"/login",
					true
				)
			})
			.catch((e) => {
				alertError(
					`Something went wrong while signing out, Error: ${e}`
				)
			})
	}

	const value = {
		currentUser,
		signup,
		login,
		logout,
		signInWithGithub,
		signInWithGoogle,
		loading,
	}
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}
