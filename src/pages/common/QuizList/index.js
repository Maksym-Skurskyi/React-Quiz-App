import React, { useEffect } from "react"
import classes from "./QuizList.module.scss"
import { NavLink } from "react-router-dom"
import {
	useDispatch,
	useStore,
} from "react-redux"
import { fetchQuizes } from "../../../store/actions/quiz"
import Loader from "../../../components/UI/Loader"

const QuizList = () => {
	const dispatch = useDispatch()
	const store = useStore()

	const loading = store.getState().quiz.loading
	const quizes = store.getState().quiz.quizes

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
						<li>No quizes yet</li>
					) : (
						renderQuizes()
					)}
				</ul>
			)}
		</div>
	)
}

export default QuizList
