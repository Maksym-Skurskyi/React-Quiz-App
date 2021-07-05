import "./FormInput.module.scss"

const FormInput = ({ formik, type, cls }) => {
	function capFirstLetter(word) {
		return word.charAt(0).toUpperCase() + word.slice(1)
	}

	return (
		<div className={`Input ${cls}`}>
			<label htmlFor={type}>{capFirstLetter(type)}</label>
			<input
				id={type}
				name={type}
				type={type}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.type}
			/>
			{formik.touched.type && formik.errors.type ? (
				<div>{formik.errors.type}</div>
			) : null}
		</div>
	)
}

export default FormInput
