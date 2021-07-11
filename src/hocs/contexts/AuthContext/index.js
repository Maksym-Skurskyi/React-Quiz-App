import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react"
import { auth } from "config/firebase"
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
		logout
	}

	return (
		<AuthContext.Provider value={value}>
			{loading && <Loader/>}
			{children}
		</AuthContext.Provider>
	)
}
