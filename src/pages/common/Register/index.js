import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"
import MetaHelmet from "components/common/UI/Helmet"

const Register = () => {
	const { signup } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		signup(email, password)
	}

	return (
		<div className={classes.Auth}>
			<MetaHelmet
				title={`Registration`}
				description={"Complete registation"}
				keywords={"Registration, sign-up, create account"}
			/>
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
