import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"
import firebase from "firebase"
import { useEffect } from "react"

const Login = () => {
	const { login, loginWithGoogle } = useAuth()

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				localStorage.setItem("isLogin", "true")
				console.log("logined with Google")
			} else {
				localStorage.setItem("isLogin", "false")
			}
		})
	}, [])

	const handleSubmit = (values) => {
		const { email, password } = values
		login(email, password)
			.then(() => {
				localStorage.setItem("isLogin", "true")
				console.log("Logined")
			})
			.catch((e) => {
				console.log(e)
			})
	}

	const handleSignInWithGoogle = async () => {
		loginWithGoogle()
			.then((result) => {
				if (result.user) {
					localStorage.setItem("isLogin", "true")
				} else {
					localStorage.setItem("isLogin", "false")
				}
			})
			.catch((e) => {
				console.log(e)
			})
	}

	return (
		<div className={classes.Auth}>
			<div>
				<h1>Authorization</h1>
				<AuthForm
					onSubmit={handleSubmit}
					handleSignInWithGoogle={
						handleSignInWithGoogle
					}
					initialValues={{
						email: "",
						password: "",
					}}
					btnText={"sign in"}
					btnText2={"sign in with Google"}
				/>
			</div>
		</div>
	)
}

export default Login
