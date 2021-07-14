import { NavLink } from "react-router-dom"
import Loader from "components/common/UI/Loader"
import classes from "./QuizList.module.scss"
import MetaHelmet from "components/common/UI/Helmet"
import { firebaseDatabase } from "config/firebase"
import { useList } from "react-firebase-hooks/database"
import { readQuizes } from "config/firebaseDatabase"
import { useEffect } from "react"
import {
	fetchQuizesError,
	fetchQuizesStart,
	fetchQuizesSuccess,
} from "redux/quiz/actions"
import { useDispatch } from "react-redux"

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
		<div className={classes.QuizList}>
			<MetaHelmet
				title={`Quizes List`}
				description={
					"Choose quiz to pass or create your own one"
				}
				keywords={"Quizes list, number of quizes"}
			/>
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
	)
}

export default QuizList
