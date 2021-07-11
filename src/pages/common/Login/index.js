import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"

const Login = () => {
	const { login } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		login(email, password)
			.then(() => {
				localStorage.setItem("isLogin", "true")
			})
			.catch((e) => {console.log(e)})
			.finally(() => {
				console.log("Log in ed")
			})
	}

	return (
		<div className={classes.Auth}>
			<div>
				<h1>Authorization</h1>

				<AuthForm
					onSubmit={handleSubmit}
					initialValues={{
						email: "",
						password: "",
					}}
					btnText={"sign in"}
				/>
			</div>
		</div>
	)
}

export default Login
