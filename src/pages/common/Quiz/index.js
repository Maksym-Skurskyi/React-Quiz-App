import React, {  useEffect } from "react"
import { connect } from "react-redux"
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
	
	useEffect(() => {
		props.fetchQuizById(props.match.params.id)
		return () => {
			props.retryQuiz()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div className={classes.Quiz}>
			<div className={classes.QuizWrapper}>
				<h1>Answer all the questions</h1>

				{props.loading || !props.quiz ? (
					<Loader />
				) : props.isFinished ? (
					<FinishedQuiz
						results={props.results}
						quiz={props.quiz}
						onRetry={props.retryQuiz}
					/>
				) : (
					<ActiveQuiz
						answers={props.quiz[props.activeQuestion].answers}
						question={props.quiz[props.activeQuestion].question}
						onAnswerClick={props.quizAnswerClick}
						quizLength={props.quiz.length}
						answerNumber={props.activeQuestion + 1}
						state={props.answerState}
					/>
				)}
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		results: state.quiz.results,
		isFinished: state.quiz.isFinished,
		activeQuestion: state.quiz.activeQuestion,
		answerState: state.quiz.answerState,
		quiz: state.quiz.quiz,
		loading: state.quiz.loading,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchQuizById: id => dispatch(fetchQuizById(id)),
		quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
		retryQuiz: () => dispatch(retryQuiz()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
