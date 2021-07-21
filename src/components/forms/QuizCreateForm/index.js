import {
	Formik,
	Field,
	Form,
	ErrorMessage,
	FieldArray,
} from "formik"
import { useI18n } from "hocs/contexts/I18nContext"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { FormattedMessage } from "react-intl"
import QuizCreateFormOptions from "../QuizCreateFormOptions"
// eslint-disable-next-line
import classes from "./QuizCreateForm.module.scss"
import { quizCreateFormValidationSchema } from "./QuizCreateForm.validation"

const QuizCreateForm = ({ onSubmit }) => {
	const context = useI18n()
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
			validationSchema={
				quizCreateFormValidationSchema
			}
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
											(_, questionIndex) => (
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
																<FormattedMessage
																	id="app.quizCreateFormQuestionLabel"
																	defaultMessage="Question"
																/>{" "}
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
											<FormattedMessage
												id="app.quizCreateFormAddQuestionButton"
												defaultMessage="Add question"
											/>
										</button>
									</div>
								</div>
							)}
						</FieldArray>
						<button type="submit">
							<FormattedMessage
								id="app.quizCreateFormCreateQuizButton"
								defaultMessage="Create quiz"
							/>
						</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default QuizCreateForm
