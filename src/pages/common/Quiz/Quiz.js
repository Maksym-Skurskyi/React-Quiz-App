import React, {  useEffect } from "react"
import { connect } from "react-redux"
import ActiveQuiz from "../../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../../components/FinishedQuiz/FinishedQuiz"
import Loader from "../../../components/UI/Loader/Loader"
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

// class Quiz extends Component {
// 	componentDidMount() {
// 		this.props.fetchQuizById(this.props.match.params.id)
// 	}

// 	componentWillUnmount() {
// 		this.props.retryQuiz()
// 	}

// 	render() {
// 		return (
// 			<div className={classes.Quiz}>
// 				<div className={classes.QuizWrapper}>
// 					<h1>Answer all the questions</h1>

// 					{this.props.loading || !this.props.quiz ? (
// 						<Loader />
// 					) : this.props.isFinished ? (
// 						<FinishedQuiz
// 							results={this.props.results}
// 							quiz={this.props.quiz}
// 							onRetry={this.props.retryQuiz}
// 						/>
// 					) : (
// 						<ActiveQuiz
// 							answers={this.props.quiz[this.props.activeQuestion].answers}
// 							question={this.props.quiz[this.props.activeQuestion].question}
// 							onAnswerClick={this.props.quizAnswerClick}
// 							quizLength={this.props.quiz.length}
// 							answerNumber={this.props.activeQuestion + 1}
// 							state={this.props.answerState}
// 						/>
// 					)}
// 				</div>
// 			</div>
// 		)
// 	}
// }

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
