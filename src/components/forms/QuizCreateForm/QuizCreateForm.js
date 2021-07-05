import React from "react"
import classes from "./QuizCreateForm.module.scss"
import { useFormik } from "formik"
import * as Yup from "yup"
import Button from "../../UI/Button/Button"
import FormInput from "../../UI/FormInput/FormInput"

const QuizCreateForm = props => {
	const addQuestionHandler = () => {}
	const createQuizHandler = () => {}

	const formik = useFormik({
		initialValues: {
			question: "",
			option1: {},
			option2: {},
			option3: {},
			option4: {},
			rightAnswerId: 1,
		},
		validationSchema: Yup.object({
			question: Yup.string()
				.min(1, "Must be 1 character at least")
				.required("Required"),
			option1: Yup.string()
				.min(1, "Must be 1 character at least")
				.required("Required"),
			option2: Yup.string()
				.min(1, "Must be 1 character at least")
				.required("Required"),
			option3: Yup.string()
				.min(1, "Must be 1 character at least")
				.required("Required"),
			option4: Yup.string()
				.min(1, "Must be 1 character at least")
				.required("Required"),
			rightAnswerId: Yup.string().min(1, "Must be 1 character at least"),
		}),
		onSubmit: values => {},
	})

	return (
		<form className={classes.QuizCreateForm} onSubmit={formik.handleSubmit}>
			<FormInput formik={formik} type={"question"} cls={classes.Input} />

			<FormInput formik={formik} type={"option1"} cls={classes.Input} />
			<FormInput formik={formik} type={"option2"} cls={classes.Input} />
			<FormInput formik={formik} type={"option3"} cls={classes.Input} />
			<FormInput formik={formik} type={"option4"} cls={classes.Input} />

			<Button type="success" onClick={addQuestionHandler}>
				Add question
			</Button>
			<Button type="primary" onClick={createQuizHandler}>
				Create quiz
			</Button>
		</form>
	)
}

export default QuizCreateForm
