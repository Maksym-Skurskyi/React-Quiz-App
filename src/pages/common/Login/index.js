import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"
import MetaHelmet from "components/common/UI/Helmet"

const Login = () => {
	const { login } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		login(email, password)
	}

	return (
		<>
			<div className={classes.Auth}>
				<MetaHelmet
					title={`Authorization`}
					description={"Complete autorization"}
					keywords={
						"Authorization, sign-in, login"
					}
				/>
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
