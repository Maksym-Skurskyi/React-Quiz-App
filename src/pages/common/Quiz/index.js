import React, { useEffect } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useParams } from "react-router-dom"
import ActiveQuiz from "../../../components/common/quizLayouts/ActiveQuiz"
import FinishedQuiz from "../../../components/common/quizLayouts/FinishedQuiz"
import Loader from "../../../components/common/UI/Loader"
import {
	fetchQuizById,
	retryQuiz,
} from "../../../redux/quiz/actions"
import classes from "./Quiz.module.scss"

const Quiz = () => {
	const dispatch = useDispatch()
	const quizes = useSelector(
		(state) => state.quizes
	)
	const dispatchRetryQuiz = () => {
		dispatch(retryQuiz())
	}

	const { id } = useParams()

	useEffect(() => {
		dispatch(fetchQuizById(id))
		return () => {
			dispatch(retryQuiz())
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div className={classes.Quiz}>
			<div className={classes.QuizWrapper}>
				<h1>Answer all the questions</h1>

				{quizes.loading || !quizes.quiz ? (
					<Loader />
				) : quizes.isFinished ? (
					<FinishedQuiz
						onRetry={dispatchRetryQuiz}
					/>
				) : (
					<ActiveQuiz />
				)}
			</div>
		</div>
	)
}

export default Quiz
