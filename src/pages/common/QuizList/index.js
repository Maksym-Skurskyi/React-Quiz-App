import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { fetchQuizes } from "redux/quiz/actions"
import Loader from "components/common/UI/Loader"
import classes from "./QuizList.module.scss"

const QuizList = () => {
	const dispatch = useDispatch()
	
	const quizes = useSelector(state => state.quizes.quizes)
	const loading = useSelector(state => state.quizes.loading)
	
	useEffect(() => {
		dispatch(fetchQuizes())
		// eslint-disable-next-line
	}, [])

	const renderQuizes = () => {
		return quizes.map((quiz) => {
			return (
				<li key={quiz.id}>
					<NavLink to={`/quiz/${quiz.id}`}>
						{quiz.name}
					</NavLink>
				</li>
			)
		})
	}

	return (
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
	)
}

export default QuizList
