import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"

const Login = () => {
	const { login, loginWithGoogle } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		login(email, password)
	}

	const handleSignInWithGoogle = async () =>
		loginWithGoogle()

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
