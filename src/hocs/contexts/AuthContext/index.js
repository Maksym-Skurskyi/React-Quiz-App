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
import { alertSuccess, alertError, alertWarn} from "components/common/Alert"

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

	useEffect(() => {
		const unsubscribe = firebaseAuth.onAuthStateChanged(
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
					alertWarn("Something went wrong while signing up")
					setLogoutParamsAndRedirect(
						null,
						false,
						"/login"
					)
				}
			})
			.catch(() => alertError("Something went wrong while signing up"))
	}

	const socialMediaAuth = async (provider) => {
		return await firebaseAuth
			.signInWithPopup(provider)
			.then((result) => {
				if (result.user) {
					alertSuccess("Now you are signed in")
					setLoginParamsAndRedirect()
				} else {
					alertError("Something went wrong while signing in")
					setLogoutParamsAndRedirect(
						null,
						false,
						"/login"
					)
				}
			})
			.catch(() => {
				alertError("Something went wrong while signing in")
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
				alertError("Something went wrong while signing in")
			})
	}
	const logout = async () => {
		return firebaseAuth
			.signOut()
			.then(() => {
				alertWarn("You are logouted now")
				setLogoutParamsAndRedirect(
					null,
					false,
					"/login"
				)
			})
			.catch((e) => {
				alertError("Something went wrong while signing out")
				console.log(e)
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
