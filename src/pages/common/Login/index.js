import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"
import PageLayout from "hocs/PageLayout"

const Login = () => {
	const { login } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		login(email, password)
	}

	return (
		<PageLayout
			title={`Authorization`}
			description={"Complete autorization"}
			keywords={"Authorization, sign-in, login"}
		>
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
		</PageLayout>
	)
}

export default Login
