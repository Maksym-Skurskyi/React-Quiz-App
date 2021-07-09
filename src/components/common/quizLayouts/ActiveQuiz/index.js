import React from "react"
import { useSelector } from "react-redux"
import classes from "./ActiveQuiz.module.scss"
import AnswersList from "./AnswersList"

const ActiveQuiz = () => {
	const quizes = useSelector(
		(state) => state.quizes
	)
	const question =
		quizes.quiz[quizes.activeQuestion].question
	const quizLength = quizes.quiz.length
	const answerNumber = quizes.activeQuestion + 1

	const quiz = useSelector(
		(state) => state.quizes
	)
	console.log(quiz)

	return (
		<div className={classes.ActiveQuiz}>
			<p className={classes.Question}>
				<span>
					<strong>{answerNumber}.</strong>&nbsp;
					{question}
				</span>

				<small>
					{answerNumber} of {quizLength}
				</small>
			</p>

			<AnswersList
				questionId={quizes.activeQuestion}
			/>
		</div>
	)
}

export default ActiveQuiz
