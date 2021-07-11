import React from "react"
import {
	Formik,
	Field,
	Form,
	ErrorMessage,
	FieldArray,
} from "formik"
import classes from "./QuizCreateForm.module.scss"

const QuizCreateForm = ({ onSubmit }) => {
	// initialValues for quiz creating form with question and list of options
	const initialValues = {
		questions: [
			{
				question: "",
				option1: "",
				option2: "",
				option3: "",
				option4: "",
				rightAnswerId: 1,
				hOption1: "1",
				hOption2: "2",
				hOption3: "3",
				hOption4: "4",
			},
		],
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
		>
			{({ values }) => (
				<Form>
					<FieldArray name="questions">
						{({ remove, push }) => (
							<div>
								{values?.questions?.length > 0 &&
									values?.questions?.map(
										(question, index) => (
											<div
												className="row"
												key={index}
											>
												<div className="col">
													<label
														htmlFor={`questions.${index}.question`}
													>
														Question
													</label>
													<Field
														name={`questions.${index}.question`}
														placeholder="Type your question here"
														type="textarea"
													/>
													<ErrorMessage
														name={`questions.${index}.question`}
														component="div"
														className="field-error"
													/>
												</div>

												<FieldArray name="options">
													{({ remove, push }) => (
														<>
															<div className="col">
																<label
																	htmlFor={`questions.${index}.option1`}
																>
																	Option1
																</label>
																<Field
																	name={`questions.${index}.option1`}
																	placeholder="Type an option here"
																	type="textarea"
																/>
																<ErrorMessage
																	name={`questions.${index}.option1`}
																	component="div"
																	className="field-error"
																/>
															</div>
															<div className="col">
																<label
																	htmlFor={`questions.${index}.option2`}
																>
																	Option2
																</label>
																<Field
																	name={`questions.${index}.option2`}
																	placeholder="Type an option here"
																	type="textarea"
																/>
																<ErrorMessage
																	name={`questions.${index}.option2`}
																	component="div"
																	className="field-error"
																/>
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
															</div>
															<div
																className={
																	classes.options__buttons
																}
															>
																<button
																	type="button"
																	className="secondary option-add"
																	onClick={() =>
																		push({
																			option3: "",
																		})
																	}
																>
																	Add Option
																</button>
																<button
																	type="button"
																	className="secondary option-remove"
																	onClick={() =>
																		remove(index)
																	}
																>
																	Remove option
																</button>
															</div>
														</>
													)}
												</FieldArray>

												<div className="col">
													<label
														htmlFor={`questions.${index}.select`}
													>
														Select
													</label>
													<Field
														as="select"
														name={`questions.${index}.select`}
														type="textarea"
														style={{
															width: "100%",
														}}
													>
														<option value="1">
															1
														</option>
														<option value="2">
															2
														</option>
														<option value="3">
															3
														</option>
														<option value="4">
															4
														</option>
													</Field>
													<ErrorMessage
														name={`questions.${index}.select`}
														component="div"
														className="field-error"
													/>
												</div>
												<div className="col">
													<button
														type="button"
														className="secondary"
														onClick={() =>
															remove(index)
														}
													>
														X
													</button>
												</div>
												<hr className="horizontal" />
											</div>
										)
									)}
								<button
									type="button"
									className="secondary"
									onClick={() =>
										push({
											question: "",
											option1: "",
											option2: "",
											rightAnswerId: 1,
										})
									}
								>
									Add Question
								</button>
							</div>
						)}
					</FieldArray>
					<button type="submit">
						Create quiz
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default QuizCreateForm
