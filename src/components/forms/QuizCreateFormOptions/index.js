import classes from "./QuizCreateFormOptions.module.scss"
import {
	FieldArray,
	Field,
	ErrorMessage,
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
										<div
											className={
												classes.optionInput
											}
										>
											<div
												className={
													"optionInputFields"
												}
											>
												<Field
													name={`questions.${questionIndex}.answers.${optionIndex}.text`}
													placeholder="Type an option here"
													type="textarea"
												/>
												<button
													type="button"
													className={
														classes.removeOption
													}
													onClick={() => {
														remove(optionIndex)
													}}
												>
													X
												</button>
											</div>
											<div
												className={
													classes.optionRadio
												}
											>
												<label
													htmlFor={`questions.${questionIndex}.rightAnswerId.${optionIndex}`}
												>
													Right answer?
												</label>
												<Field
													id={`questions.${questionIndex}.rightAnswerId.${optionIndex}`}
													className={""}
													name={`questions.${questionIndex}.rightAnswerId`}
													type="radio"
													value={`${optionIndex}`}
												/>
											</div>
										</div>
										{/* <Field
											name={`questions.${questionIndex}.answers.${optionIndex}.id`}
											value={optionIndex}
											type="hidden"
										/> */}
										<ErrorMessage
											name={`questions.${questionIndex}.answers.${optionIndex}.text`}
											component="div"
											className="field-error"
										/>
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
								id: "",
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
