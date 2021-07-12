import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import FormInput from "components/common/UI/FormInput"
import classes from "./AuthForm.module.scss"
import Loader from "components/common/UI/Loader"
import { SocialLogin } from "components/common/UI/SocialLogin"
import { useAuth } from "hocs/contexts/AuthContext"

const AuthForm = ({
	onSubmit,
	initialValues,
	loading,
	btnText,
}) => {
	const { loginWithGoogle } = useAuth()

	// eslint-disable-next-line
	const [error, setError] = useState("")

	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Required"),
			password: Yup.string()
				.min(8, "Must be 8 characters at least")
				.required("Required"),
		}),
		onSubmit,
	})

	return loading ? (
		<Loader />
	) : (
		<form
			className={classes.AuthForm}
			onSubmit={formik.handleSubmit}
		>
			{error && (
				<div className="alert-error">{error}</div>
			)}
			<FormInput
				formik={formik}
				type={"email"}
				cls={classes.Input}
			/>
			<FormInput
				formik={formik}
				type={"password"}
				cls={classes.Input}
			/>
			<SocialLogin
				type={"submit"}
				text={btnText}
				loading={loading}
			/>
			<SocialLogin
				fn={loginWithGoogle}
				text={"Sign in with Google"}
				loading={loading}
			/>
		</form>
	)
}

export default AuthForm
