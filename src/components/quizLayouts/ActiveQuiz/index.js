import { useSelector } from "react-redux"
import AnswersList from "../AnswersList"
import classes from "./ActiveQuiz.module.scss"

const ActiveQuiz = () => {
	const quizes = useSelector(
		(state) => state.quizes
	)
	console.log("quizes in active q :>> ", quizes)
	const question =
		quizes.quiz[quizes.activeQuestion].question
	const quizLength = quizes.quiz.length
	const answerNumber = quizes.activeQuestion + 1

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
