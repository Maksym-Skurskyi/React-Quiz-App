// import React from "react"
// import { useFormik } from "formik"
// import * as Yup from "yup"
// import {
// 	Formik,
// 	Field,
// 	Form,
// 	ErrorMessage,
// 	FieldArray,
// } from "formik"

// const QuizCreateForm = ({ onSubmit }) => {
// 	const formik = useFormik({
// 		validationSchema: Yup.object({
// 			question: Yup.string()
// 				.min(1, "Must be 1 character at least")
// 				.required("Required"),
// 			option1: Yup.string()
// 				.min(1, "Must be 1 character at least")
// 				.required("Required"),
// 			option2: Yup.string()
// 				.min(1, "Must be 1 character at least")
// 				.required("Required"),
// 			option3: Yup.string()
// 				.min(1, "Must be 1 character at least")
// 				.required("Required"),
// 			option4: Yup.string()
// 				.min(1, "Must be 1 character at least")
// 				.required("Required"),
// 			rightAnswerId: Yup.string().min(
// 				1,
// 				"Must be 1 character at least"
// 			),
// 		}),
// 		onSubmit: () => {
// 			console.log(formik)
// 		},
// 	})

// 	// initialValues for quiz creating form with question and list of options
// 	const initialValues = {
// 		questions: [
// 			{
// 				question: "",
// 				option1: "",
// 				option2: "",
// 				option3: "",
// 				option4: "",
// 				rightAnswerId: 1,
// 				hOption1: "1",
// 				hOption2: "2",
// 				hOption3: "3",
// 				hOption4: "4",
// 			},
// 		],
// 	}

// 	return (
// 		<Formik
// 			initialValues={initialValues}
// 			onSubmit={onSubmit}
// 		>
// 			{({ values }) => (
// 				<Form>
// 					<FieldArray name="questions">
// 						{({ remove, push }) => (
// 							<div>
// 								{values?.questions?.length > 0 &&
// 									values?.questions?.map(
// 										(question, index) => (
// 											<div
// 												className="row"
// 												key={index}
// 											>
// 												<div className="col">
// 													<label
// 														htmlFor={`questions.${index}.question`}
// 													>
// 														Question
// 													</label>
// 													<Field
// 														name={`questions.${index}.question`}
// 														placeholder="Type your question here"
// 														type="textarea"
// 													/>
// 													<ErrorMessage
// 														name={`questions.${index}.question`}
// 														component="div"
// 														className="field-error"
// 													/>
// 												</div>
// 												<div className="col">
// 													<label
// 														htmlFor={`questions.${index}.option1`}
// 													>
// 														Option1
// 													</label>
// 													<Field
// 														name={`questions.${index}.option1`}
// 														placeholder="Type an option here"
// 														type="textarea"
// 													/>
// 													<ErrorMessage
// 														name={`questions.${index}.option1`}
// 														component="div"
// 														className="field-error"
// 													/>
// 												</div>
// 												<div className="col">
// 													<label
// 														htmlFor={`questions.${index}.option2`}
// 													>
// 														Option2
// 													</label>
// 													<Field
// 														name={`questions.${index}.option2`}
// 														placeholder="Type an option here"
// 														type="textarea"
// 													/>
// 													<ErrorMessage
// 														name={`questions.${index}.option2`}
// 														component="div"
// 														className="field-error"
// 													/>
// 												</div>
// 												<div className="col">
// 													<label
// 														htmlFor={`questions.${index}.option3`}
// 													>
// 														Option3
// 													</label>
// 													<Field
// 														name={`questions.${index}.option3`}
// 														placeholder="Type an option here"
// 														type="textarea"
// 													/>
// 													<ErrorMessage
// 														name={`questions.${index}.option3`}
// 														component="div"
// 														className="field-error"
// 													/>
// 												</div>
// 												<div className="col">
// 													<label
// 														htmlFor={`questions.${index}.option4`}
// 													>
// 														Option4
// 													</label>
// 													<Field
// 														name={`questions.${index}.option4`}
// 														placeholder="Type an option here"
// 														type="textarea"
// 													/>
// 													<Field
// 														name={`questions.${index}.hOption4`}
// 														placeholder="Type an option here"
// 														type="hidden"
// 														value="4"
// 													/>
// 													<Field
// 														name={`questions.${index}.hOption3`}
// 														placeholder="Type an option here"
// 														type="hidden"
// 														value="3"
// 													/>
// 													<Field
// 														name={`questions.${index}.hOption2`}
// 														placeholder="Type an option here"
// 														type="hidden"
// 														value="2"
// 													/>
// 													<Field
// 														name={`questions.${index}.hOption1`}
// 														placeholder="Type an option here"
// 														type="hidden"
// 														value="1"
// 													/>
// 													<ErrorMessage
// 														name={`questions.${index}.option4`}
// 														component="div"
// 														className="field-error"
// 													/>
// 												</div>
// 												<div className="col">
// 													<label
// 														htmlFor={`questions.${index}.rightAnswerId`}
// 													>
// 														Select
// 													</label>
// 													<Field
// 														as="select"
// 														name={`questions.${index}.rightAnswerId`}
// 														type="textarea"
// 														style={{
// 															width: "100%",
// 														}}
// 													>
// 														<option value="1">
// 															1
// 														</option>
// 														<option value="2">
// 															2
// 														</option>
// 														<option value="3">
// 															3
// 														</option>
// 														<option value="4">
// 															4
// 														</option>
// 													</Field>
// 													<ErrorMessage
// 														name={`questions.${index}.select`}
// 														component="div"
// 														className="field-error"
// 													/>
// 												</div>
// 												<div className="col">
// 													<button
// 														type="button"
// 														className="secondary"
// 														onClick={() =>
// 															remove(index)
// 														}
// 													>
// 														X
// 													</button>
// 												</div>
// 												<hr className="horizontal" />
// 											</div>
// 										)
// 									)}
// 								<button
// 									type="button"
// 									className="secondary"
// 									onClick={() =>
// 										push({
// 											question: "",
// 											option1: "",
// 											option2: "",
// 											option3: "",
// 											option4: "",
// 											hOption1: 1,
// 											hOption2: 2,
// 											hOption3: 3,
// 											hOption4: 4,
// 											rightAnswerId: 1,
// 										})
// 									}
// 								>
// 									Add Question
// 								</button>
// 							</div>
// 						)}
// 					</FieldArray>
// 					<button type="submit">
// 						Create quiz
// 					</button>
// 				</Form>
// 			)}
// 		</Formik>
// 	)
// }

// export default QuizCreateForm

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
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
				rightAnswerId: 1,
				answers: [],
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
										(question, questionIndex) => (
											<div
												className="row"
												key={questionIndex}
											>
												<div className="col">
													<label
														htmlFor={`questions.${questionIndex}.question`}
													>
														Question
													</label>
													<Field
														name={`questions.${questionIndex}.question`}
														placeholder="Type your question here"
														type="textarea"
													/>
													<ErrorMessage
														name={`questions.${questionIndex}.question`}
														component="div"
														className="field-error"
													/>
												</div>

												<FieldArray
													name={`questions.${questionIndex}.answers`}
												>
													{({ remove, push }) => (
														<div>
															{values?.questions[
																questionIndex
															]?.answers?.length >
																0 &&
																values?.questions[
																	questionIndex
																]?.answers?.map(
																	(
																		option,
																		optionIndex
																	) => (
																		<>
																			<div className="col">
																				<label
																					htmlFor={`questions.${questionIndex}.answers.${optionIndex}.option${optionIndex}`}
																				>
																					Option{" "}
																					{
																						optionIndex
																					}
																				</label>
																				<Field
																					name={`questions.${questionIndex}.answers.${optionIndex}.text`}
																					placeholder="Type an option here"
																					type="textarea"
																				/>
																				<Field
																					name={`questions.${questionIndex}.answers.${optionIndex}.id`}
																					value={
																						optionIndex
																					}
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
																					onClick={() =>
																						remove(
																							optionIndex
																						)
																					}
																				>
																					X
																				</button>
																			</div>
																		</>
																	)
																)}
															<button
																className={
																	classes.addOption
																}
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

												<div className="col">
													<label
														htmlFor={`questions.${questionIndex}.rightAnswerId`}
													>
														Select
													</label>
													<Field
														as="select"
														name={`questions.${questionIndex}.rightAnswerId`}
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
														name={`questions.${questionIndex}.select`}
														component="div"
														className="field-error"
													/>
												</div>
												<div className="col">
													<button
														type="button"
														className="secondary"
														onClick={() =>
															remove(
																questionIndex
															)
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
											rightAnswerId: 1,
											answers: [],
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
					<pre>
						{JSON.stringify(values, 0, 2)}
					</pre>
				</Form>
			)}
		</Formik>
	)
}

export default QuizCreateForm
