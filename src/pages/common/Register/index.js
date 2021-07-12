import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"

const Register = () => {
	const { signup } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		signup(email, password)
	}

	return (
		<div className={classes.Auth}>
			<div>
				<h1>Registration</h1>

				<AuthForm
					onSubmit={handleSubmit}
					initialValues={{
						email: "",
						password: "",
					}}
					btnText={"Sign up"}
				/>
			</div>
		</div>
	)
}

export default Register
