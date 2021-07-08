import classes from "./Auth.module.scss"
import React from "react"
import { useAuth } from "../../../hocs/contexts/AuthContext"
import AuthForm from "../../../components/forms/AuthForm"

const Register = () => {
	const { signup } = useAuth()

	const handleSubmit = (values) => {
		const { email, password } = values
		signup(email, password)
			.then(() => {
				localStorage.setItem("isLogin", "true")
			})
			.catch((e) => console.log(e))
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
					btnText={"sign up"}
				/>
			</div>
		</div>
	)
}

export default Register
