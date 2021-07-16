import * as Yup from "yup"
import {
	Formik,
	Field,
	Form,
	ErrorMessage,
	FieldArray,
} from "formik"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import QuizCreateFormOptions from "../QuizCreateFormOptions"
// eslint-disable-next-line
import classes from "./QuizCreateForm.module.scss"

const QuizCreateForm = ({ onSubmit }) => {
	// initialValues for quiz creating form with question and list of options
	const initialValues = {
		questions: [
			{
				question: "",
				rightAnswerId: "0",
				answers: [],
			},
		],
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={Yup.object().shape({
				questions: Yup.array()
					.of(
						Yup.object().shape({
							question: Yup.string()
								.min(1, "too short")
								.required("Write your question"), // these constraints take precedence
							answers: Yup.array().of(
								Yup.object().shape({
									text: Yup.string()
										.min(1, "too short")
										.required("Don't leave blank fields, please"), // these constraints take precedence
									})
									),
								})
								)
								.required("Must have question") // these constraints are shown if and only if inner constraints are satisfied
								.min(1, "Minimum of 1 question"),
							})}
			onSubmit={onSubmit}
		>
			{({ values }) => {
				return (
					<Form>
						<FieldArray name="questions">
							{({ remove, push }) => (
								<div>
									{values?.questions?.length >
										0 &&
										values?.questions?.map(
											(
												question,
												questionIndex
											) => (
												<div
													className="row"
													key={questionIndex}
												>
													<div className="col">
														<div
															className={
																"optionInputFields"
															}
														>
															<label
																htmlFor={`questions.${questionIndex}.question`}
															>
																Question{" "}
																{questionIndex}
															</label>
															<button
																type="button"
																className="secondary"
																onClick={() => {
																	confirmAlert({
																		title:
																			"Confirm to keep going",
																		message:
																			"Are you sure you want to remove this question with all its options?",
																		buttons: [
																			{
																				label:
																					"Yes",
																				onClick: () =>
																					remove(
																						questionIndex
																					),
																			},
																			{
																				label:
																					"No",
																				onClick: () =>
																					null,
																			},
																		],
																	})
																}}
															>
																X
															</button>
														</div>

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

													<QuizCreateFormOptions
														values={values}
														questionIndex={
															questionIndex
														}
													/>

													<div className="col"></div>
													<hr className="horizontal" />
												</div>
											)
										)}
									<div className="quizCreateBtn">
										<button
											type="button"
											className="secondary"
											onClick={() =>
												push({
													question: "",
													rightAnswerId: "0",
													answers: [],
												})
											}
										>
											Add Question
										</button>
									</div>
								</div>
							)}
						</FieldArray>
						<button type="submit">
							Create quiz
						</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default QuizCreateForm
