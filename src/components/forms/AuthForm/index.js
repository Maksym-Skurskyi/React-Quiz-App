import { useState } from "react"
import {
	ErrorMessage,
	Field,
	Form,
	Formik,
} from "formik"
import classes from "./AuthForm.module.scss"
import Loader from "components/common/UI/Loader"
import { SocialLogin } from "components/common/UI/SocialLogin"
import { useAuth } from "hocs/contexts/AuthContext"
import { authFormValidationSchema } from "./AuthForm.validation"

const AuthForm = ({
	onSubmit,
	initialValues,
	loading,
	btnText,
}) => {
	const {
		signInWithGithub,
		signInWithGoogle,
	} = useAuth()

	// eslint-disable-next-line
	const [error, setError] = useState("")

	return loading ? (
		<Loader />
	) : (
		<Formik
			initialValues={initialValues}
			validationSchema={authFormValidationSchema}
			onSubmit={onSubmit}
		>
			{() => {
				return (
					<div className={classes.authForm}>
						<Form>
							<Field
								name={"email"}
								placeholder="Type an email here"
								type="email"
							/>
							<ErrorMessage
								name={"email"}
								component="div"
								className="field-error"
							/>
							<Field
								name={"password"}
								placeholder="Type a password here"
								type="password"
							/>
							<ErrorMessage
								name={"password"}
								component="div"
								className="field-error"
							/>
							<button
								type={"submit"}
								loading={loading}
							>
								{btnText}
							</button>
						</Form>
						<div className={classes.authFormOr}>
							or
						</div>
						<SocialLogin
							fn={signInWithGoogle}
							text={"Sign in with Google"}
							loading={loading}
						/>
						<SocialLogin
							fn={signInWithGithub}
							text={"Sign in with Github"}
							loading={loading}
						/>
					</div>
				)
			}}
		</Formik>
	)
}

export default AuthForm
