import * as Yup from "yup"

export const quizCreateFormValidationSchema = Yup.object().shape({
	questions: Yup.array()
		.of(
			Yup.object().shape({
				question: Yup.string().min(1, "too short").required("Write your question"), // these constraints take precedence
				answers: Yup.array().of(
					Yup.object().shape({
						text: Yup.string().min(1, "too short").required("Don't leave blank fields, please"), // these constraints take precedence
					})
				),
			})
		)
		.required("Must have question") // these constraints are shown if and only if inner constraints are satisfied
		.min(1, "Minimum of 1 question"),
})
