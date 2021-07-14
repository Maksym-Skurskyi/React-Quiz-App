import {
	NavLink,
	useParams,
} from "react-router-dom"
import Loader from "components/common/UI/Loader"
import classes from "./QuizList.module.scss"
import { firebaseDatabase } from "config/firebase"
import { useList } from "react-firebase-hooks/database"
import {
	fetchQuizes,
	fetchQuizesError,
	fetchQuizesStart,
	fetchQuizesSuccess,
} from "redux/quiz/actions"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import PageLayout from "hocs/PageLayout"
import { useEffect, useState } from "react"

const QuizList = () => {
	const [isLoading, setIsLoading] = useState(
		false
	)
	const dispatch = useDispatch()
	const quizes = useSelector(
		(state) => state.quizes
	)

	useEffect(() => {
		setIsLoading(true)
		dispatch(fetchQuizes())
		setIsLoading(false)
	}, [])

	const renderQuizes = () => {
		return (
			quizes &&
			quizes.map((quiz) => {
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

				{isLoading ? (
					<Loader />
				) : (
					<ul>
						{quizes ? (
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
