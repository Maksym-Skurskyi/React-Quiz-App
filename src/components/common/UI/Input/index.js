import React from "react"
import classes from "./Input.module.scss"

function isInvalid({
	valid,
	touched,
	shouldValidate,
}) {
	return !valid && shouldValidate && touched
}

const Input = ({type, label, value, onChange, errorMessage}) => {
	const inputType = type || "text"
	const cls = [classes.Input]
	const htmlFor = `${inputType}-${Math.random()}`

	if (isInvalid()) {
		cls.push(classes.invalid)
	}

	return (
		<div className={cls.join(" ")}>
			<label htmlFor={htmlFor}>
				{label}
			</label>
			<input
				type={inputType}
				id={htmlFor}
				value={value}
				onChange={onChange}
			/>

			{isInvalid() ? (
				<span>
					{errorMessage ||
						"Some data is wrong :("}
				</span>
			) : null}
		</div>
	)
}

export default Input
