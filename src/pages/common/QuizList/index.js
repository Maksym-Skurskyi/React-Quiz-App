import { NavLink } from "react-router-dom"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useList } from "react-firebase-hooks/database"
import { useEffect } from "react"
import Loader from "components/common/UI/Loader"
import { fetchQuizes } from "redux/quiz/actions"
import PageLayout from "hocs/PageLayout"
import classes from "./QuizList.module.scss"

const QuizList = () => {
	const dispatch = useDispatch()
	const quizes = useSelector(
		(state) => state.quizes.quizes
	)
	const loading = useSelector(
		(state) => state.quizes.loading
	)

	useEffect(() => {
		dispatch(fetchQuizes())
	}, [dispatch])

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
						{quizes ? (
							quizes.map((quiz) => {
								console.log(quiz)
								return (
									<li key={quiz.id}>
										<NavLink
											to={`/quiz/${quiz.id}`}
										>
											{quiz.name}
										</NavLink>
									</li>
								)
							})
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
