import { NavLink } from "react-router-dom"
import Loader from "components/common/UI/Loader"
import classes from "./QuizList.module.scss"
import { fetchQuizes } from "redux/quiz/actions"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import PageLayout from "hocs/PageLayout"
import { useEffect } from "react"

const QuizList = () => {
	const dispatch = useDispatch()
	const quizes = useSelector(
		(state) => state.quizes.quizes
	)
	const state = useSelector((state) => state)
	console.log("state :>> ", state)
	const loading = useSelector(
		(state) => state.quizes.loading
	)
	console.log("quizesinList :>> ", quizes)

	useEffect(() => {
		dispatch(fetchQuizes())
	}, [dispatch])

	const renderQuizes = () => {
		return quizes.map((quiz) => (
			<li key={quiz.id}>
				<NavLink to={`/quiz/${quiz.id}`}>
					{quiz.name}
				</NavLink>
			</li>
		))
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
