import React, { useEffect } from "react"
import { connect, useDispatch, useStore } from "react-redux"
import ActiveQuiz from "../../../components/quizLayouts/ActiveQuiz"
import FinishedQuiz from "../../../components/quizLayouts/FinishedQuiz"
import Loader from "../../../components/UI/Loader"
import {
	fetchQuizById,
	quizAnswerClick,
	retryQuiz,
} from "../../../store/actions/quiz"
import classes from "./Quiz.module.scss"

const Quiz = (props) => {
	const dispatch = useDispatch()
	const quiz = useStore().getState().quiz

	useEffect(() => {
		dispatch(fetchQuizById(props.match.params.id))
		return () => {
			dispatch(retryQuiz())
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div className={classes.Quiz}>
			<div className={classes.QuizWrapper}>
				<h1>Answer all the questions</h1>

				{quiz.loading || !quiz.quiz ? (
					<Loader />
				) : quiz.isFinished ? (
					<FinishedQuiz
						results={quiz.results}
						quiz={quiz.quiz}
						onRetry={quiz.retryQuiz}
					/>
				) : (
					<ActiveQuiz
						answers={
							quiz.quiz[quiz.activeQuestion]
								.answers
						}
						question={
							quiz.quiz[quiz.activeQuestion]
								.question
						}
						onAnswerClick={() => {
							dispatch(quizAnswerClick())
						}}
						quizLength={quiz.quiz.length}
						answerNumber={
							quiz.activeQuestion + 1
						}
						state={quiz.answerState}
					/>
				)}
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		quiz: state.quiz.quiz,
	}
}



export default connect(
	mapStateToProps,
	null
)(Quiz)
