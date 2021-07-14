import { useAuth } from "hocs/contexts/AuthContext"
import AuthForm from "components/forms/AuthForm"
import classes from "./Auth.module.scss"
import PageLayout from "hocs/PageLayout"

const Register = () => {
	const { signup } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		signup(email, password)
	}

	return (
		<PageLayout
			title={`Registration`}
			description={"Complete registation"}
			keywords={
				"Registration, sign-up, create account"
			}
		>
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
		</PageLayout>
	)
}

export default Register
