import { Field, FieldArray } from "formik"

export const FieldArrayHOptions = ({
	name,
	placeholder,
	type,
	index,
}) => (
	<FieldArray
		index={index}
		name={name}
		placeholder={placeholder}
		type={type}
	>
		<Field
			name={`questions.${index}.hOption4`}
			placeholder="Type an option here"
			type="hidden"
			value="4"
		/>
		<Field
			name={`questions.${index}.hOption3`}
			placeholder="Type an option here"
			type="hidden"
			value="3"
		/>
		<Field
			name={`questions.${index}.hOption2`}
			placeholder="Type an option here"
			type="hidden"
			value="2"
		/>
		<Field
			name={`questions.${index}.hOption1`}
			placeholder="Type an option here"
			type="hidden"
			value="1"
		/>
	</FieldArray>
)
