import React from "react"

const Button = ({onClick, disabled, children}) => {
	// const cls = [classes.Button, classes[props.type]]

	return (
		<button
			onClick={onClick}
			// className={cls.join(" ")}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
