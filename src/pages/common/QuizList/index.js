import { NavLink } from "react-router-dom"
import Loader from "components/common/UI/Loader"
import classes from "./QuizList.module.scss"
import { firebaseDatabase } from "config/firebase"
import { useList } from "react-firebase-hooks/database"
import {
	fetchQuizesError,
	fetchQuizesStart,
	fetchQuizesSuccess,
} from "redux/quiz/actions"
import { useDispatch } from "react-redux"
import PageLayout from "hocs/PageLayout"

const QuizList = () => {
	const dispatch = useDispatch()
	const [snapshots, loading, error] = useList(
		firebaseDatabase.ref("quiz")
	)

	const quizesFromDB = []

	try {
		dispatch(fetchQuizesStart())
		snapshots.map((snapshot, index) => {
			return quizesFromDB.push({
				id: snapshot.key,
				name: `${index}. ${
					snapshot.val()[0].question
				}`,
			})
		})
		dispatch(fetchQuizesSuccess(quizesFromDB))
	} catch (e) {
		dispatch(fetchQuizesError(e))
		console.log("error :>> ", error)
	}

	const renderQuizes = () => {
		return (
			quizesFromDB &&
			quizesFromDB.map((quiz) => {
				return (
					<li key={quiz.id}>
						<NavLink to={`/quiz/${quiz.id}`}>
							{quiz.name}
						</NavLink>
					</li>
				)
			})
		)
	}

	return (
		<PageLayout
			title={`Quizes List`}
			description={
				"Choose quiz to pass or create your own one"
			}
			keywords={"Quizes list, number of quizes"}
		>
			<div className={classes.QuizList}>
				<h1>Quiz-List</h1>

				{loading ? (
					<Loader />
				) : (
					<ul>
						{quizesFromDB ? (
							renderQuizes()
						) : (
							<li>No quizes yet</li>
						)}
					</ul>
				)}
			</div>
		</PageLayout>
	)
}

export default QuizList
