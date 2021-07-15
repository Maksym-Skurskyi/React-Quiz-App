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
import PageLayout from "hocs/PageLayout"

const Quiz = () => {
	const { id } = useParams()
	const dispatch = useDispatch()

	const isQuizFinished = useSelector(
		(state) => state.quizes.isFinished
	)

	const loading = useSelector(
		(state) => state.quizes.loading
	)

	const quiz = useSelector(
		(state) => state.quizes.quiz
	)

	useEffect(() => {
		dispatch(fetchQuizById(id))
		return () => {
			dispatch(retryQuiz())
		}
		//eslint-disable-next-line
	}, [])

	const getRetryQuiz = () => {
		dispatch(retryQuiz())
	}

	return (
		<PageLayout
			title={`Quiz`}
			description={"Answering the questions"}
			keywords={"Pass the quiz, test"}
		>
			<div className={classes.Quiz}>
				<div className={classes.QuizWrapper}>
					<h1>Answer all the questions</h1>

					{loading || !quiz ? (
						<Loader />
					) : isQuizFinished ? (
						<FinishedQuiz
							onRetry={getRetryQuiz}
						/>
					) : (
						<ActiveQuiz />
					)}
				</div>
			</div>
		</PageLayout>
	)
}

export default Quiz
