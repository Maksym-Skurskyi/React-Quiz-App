import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import Button from "../../UI/Button/Button"
import classes from "./AuthForm.module.scss"
import FormInput from "../../UI/FormInput/FormInput"

const AuthForm = props => {
	const loginHandler = () => {
		props.auth(formik.values.email, formik.values.password, true)
	}
	const registerHandler = () => {
		props.auth(formik.values.email, formik.values.password, false)
	}
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string()
				.min(8, "Must be 8 characters at least")
				.required("Required"),
		}),
		onSubmit: values => {},
	})
	return (
		<form className={classes.AuthForm} onSubmit={formik.handleSubmit}>
			<FormInput formik={formik} type={"email"} cls={classes.Input} />
			<FormInput formik={formik} type={"password"} cls={classes.Input} />

			<Button type="success" onClick={loginHandler}>
				Sign in
			</Button>
			<Button type="primary" onClick={registerHandler}>
				Sign up
			</Button>
		</form>
	)
}

export default AuthForm
