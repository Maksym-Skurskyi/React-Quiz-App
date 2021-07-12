import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import {
  firebaseAuth,
  githubAuthProvider,
  googleAuthProvider,
} from "config/firebase"
import { useHistory } from "react-router-dom"

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
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setLogoutParamsAndRedirect(user, true)
      } else {
        setLogoutParamsAndRedirect(user, false, "/login")
      }
    })
    return unsubscribe
  }, [setLogoutParamsAndRedirect])

  const signup = async (email, password) => {
    return firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user) {
          setLoginParamsAndRedirect()
        } else {
          setLogoutParamsAndRedirect(null, false, "/login")
        }
      })
      .catch((e) => console.log(e))
  }

	const socialMediaAuth = async (provider) => {
    return await firebaseAuth
      .signInWithPopup(provider)
      .then((result) => {
				if (result.user) {
					console.log(result.user)
          setLoginParamsAndRedirect()
        } else {
          setLogoutParamsAndRedirect(null, false, "/login")
        }
      }).catch((e) => {
        console.log(e)
      })
  }

	const githubAuth = (async() => socialMediaAuth(githubAuthProvider))
	const googleAuth = (async() => socialMediaAuth(googleAuthProvider))

  const login = async (email, password) => {
    return firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoginParamsAndRedirect()
        console.log("Logined")
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const logout = async () => {
    return firebaseAuth
      .signOut()
      .then(() => {
        setLogoutParamsAndRedirect(null, false, "/login")
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    googleAuth,
    githubAuth,
    loading,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
