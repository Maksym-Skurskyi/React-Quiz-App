import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import FormInput from "components/common/UI/FormInput"
import classes from "./AuthForm.module.scss"

const AuthForm = ({
	btnText,
	btnText2,
	onSubmit,
	handleSignInWithGoogle,
	initialValues,
}) => {
	// eslint-disable-next-line
	const [error, setError] = useState("")
	// eslint-disable-next-line
	const [loading, setLoading] = useState(false)

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

	return (
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

			<button
				type="submit"
				disabled={loading}>
				{btnText}
			</button>
			<button
				type="button"
				onClick={handleSignInWithGoogle}
				disabled={loading}>
				{btnText2}
			</button>
		</form>
	)
}

export default AuthForm
