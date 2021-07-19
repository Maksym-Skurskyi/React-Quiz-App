import "./FormInput.module.scss"

const FormInput = ({ handleChange, handleBlur, values, type, cls }) => {
	const capFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1)
	}

	return (
		<div className={`Input ${cls}`}>
			<label htmlFor={type}>{capFirstLetter(type)}</label>
			<input
				id={type}
				name={type}
				type={type}
				onChange={handleChange}
				onBlur={handleBlur}
				value={values.type}
			/>
		</div>
	)
}

export default FormInput
