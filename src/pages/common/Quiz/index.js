import { useEffect } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useParams } from "react-router-dom"
import {
	fetchQuizById,
	retryQuiz,
} from "redux/quiz/actions"
import ActiveQuiz from "components/quizLayouts/ActiveQuiz"
import FinishedQuiz from "components/quizLayouts/FinishedQuiz"
import Loader from "components/common/UI/Loader"
import classes from "./Quiz.module.scss"
import MetaHelmet from "components/common/UI/Helmet"

const Quiz = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const quizes = useSelector(
		(state) => state.quizes
	)

	useEffect(() => {
		dispatch(fetchQuizById(id))
		return () => {
			dispatch(retryQuiz())
		}
		// eslint-disable-next-line
	}, [])

	const getRetryQuiz = () => {
		dispatch(retryQuiz())
	}

	return (
		<div className={classes.Quiz}>
			<MetaHelmet
				title={`Quiz`}
				description={"Answering the questions"}
				keywords={"Pass the quiz, test"}
			/>
			<div className={classes.QuizWrapper}>
				<h1>Answer all the questions</h1>

				{quizes.loading || !quizes.quiz ? (
					<Loader />
				) : quizes.isFinished ? (
					<FinishedQuiz onRetry={getRetryQuiz} />
				) : (
					<ActiveQuiz />
				)}
			</div>
		</div>
	)
}

export default Quiz
