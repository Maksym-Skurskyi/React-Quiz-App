import classes from "./QuizCreateFormOptions.module.scss"
import {
	FieldArray,
	Field,
	ErrorMessage,
	replace,
} from "formik"

const QuizCreateFormOptions = ({
	values,
	questionIndex,
}) => {
	return (
		<FieldArray
			name={`questions.${questionIndex}.answers`}
		>
			{({ remove, push }) => (
				<div>
					{values?.questions[questionIndex]
						?.answers?.length > 0 &&
						values?.questions[
							questionIndex
						]?.answers?.map(
							(option, optionIndex) => (
								<>
									<div className="col">
										<label
											htmlFor={`questions.${questionIndex}.answers.${optionIndex}.option${optionIndex}`}
										>
											Option {optionIndex}
										</label>
										<Field
											name={`questions.${questionIndex}.answers.${optionIndex}.text`}
											placeholder="Type an option here"
											type="textarea"
										/>
										<Field
											name={`questions.${questionIndex}.answers.${optionIndex}.id`}
											value={optionIndex}
											type="hidden"
										/>
										<ErrorMessage
											name={`questions.${questionIndex}.answers.${optionIndex}.text`}
											component="div"
											className="field-error"
										/>
										<button
											type="button"
											className={
												classes.removeOption
											}
											onClick={() => {
												remove(optionIndex)
												values?.questions[
													questionIndex
												]?.answers?.map(
													(value, i) => {
														// const valueId =
														// 	value.id
														return replace(
															`questions.${questionIndex}.answers.${optionIndex}.id`,
															i
														)
													}
												)
											}}
										>
											X
										</button>
									</div>
								</>
							)
						)}
					<button
						className={classes.addOption}
						type="button"
						onClick={() => {
							push({
								text: "",
								id:
									values?.questions[questionIndex]
										?.answers?.length,
							})
						}}
					>
						Add option
					</button>
				</div>
			)}
		</FieldArray>
	)
}

export default QuizCreateFormOptions
