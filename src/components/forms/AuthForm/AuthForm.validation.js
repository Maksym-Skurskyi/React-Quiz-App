import * as Yup from "yup"

export const authFormValidationSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required email"),
	password: Yup.string().min(8, "Must be 6 characters at least").required("Required password"),
})
