import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react"
import { auth } from "config/firebase"
import firebase from "firebase"
import Loader from "components/common/UI/Loader"
const AuthContext = createContext()

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)

	const signup = (email, password) => {
		return auth.createUserWithEmailAndPassword(
			email,
			password
		)
	}

	const loginWithGoogle = async() => {
		let provider = new firebase.auth.GoogleAuthProvider()

		return firebase
			.auth()
			.signInWithPopup(provider)
	}

	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(
			email,
			password
		)
	}
	const logout = () => {
		return auth.signOut()
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(
			(user) => {
				setCurrentUser(user)
				setLoading(false)
			}
		)
		return unsubscribe
	}, [])

	const value = {
		currentUser,
		signup,
		login,
		logout,
		loginWithGoogle,
	}

	return (
		<AuthContext.Provider value={value}>
			{loading && <Loader />}
			{children}
		</AuthContext.Provider>
	)
}
