import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"

const Login = () => {
	const { login } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		login(email, password)
	}

	return (
		<>
			<div className={classes.Auth}>
				<div>
					<h1>Authorization</h1>
					<AuthForm
						onSubmit={handleSubmit}
						initialValues={{
							email: "",
							password: "",
						}}
						btnText={"Sign in"}
					/>
				</div>
			</div>
		</>
	)
}

export default Login
