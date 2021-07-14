import { useEffect } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useParams } from "react-router-dom"
import {
	fetchQuizById,
	fetchQuizesError,
	fetchQuizesStart,
	fetchQuizSuccess,
	retryQuiz,
} from "redux/quiz/actions"
import ActiveQuiz from "components/quizLayouts/ActiveQuiz"
import FinishedQuiz from "components/quizLayouts/FinishedQuiz"
import Loader from "components/common/UI/Loader"
import classes from "./Quiz.module.scss"
import MetaHelmet from "components/common/UI/Helmet"
import { useList } from "react-firebase-hooks/database"
import { firebaseDatabase } from "config/firebase"

const Quiz = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const isQuizFinished = useSelector(
		(state) => state.quizes.isFinished
	)
	const [snapshots, loading, error] = useList(
		firebaseDatabase.ref(`quiz/${id}`)
	)
	const quiz = []
	try {
		dispatch(fetchQuizesStart())
		snapshots.map((s) => {
			quiz.push(s.val())
		})
		console.log("quiz :>> ", quiz)
		if (quiz) {
			dispatch(fetchQuizSuccess(quiz))
		}
	} catch (e) {
		dispatch(fetchQuizesError(e))
		console.log("error :>> ", error)
	}
	useEffect(() => {
		return () => {
			dispatch(retryQuiz())
		}
		//eslint-disable-next-line
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

				{loading || !quiz ? (
					<Loader />
				) : isQuizFinished ? (
					<FinishedQuiz onRetry={getRetryQuiz} />
				) : (
					<ActiveQuiz />
				)}
			</div>
		</div>
	)
}

export default Quiz
