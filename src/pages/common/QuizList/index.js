import React, { useEffect } from "react"
import classes from "./QuizList.module.scss"
import { NavLink } from "react-router-dom"
import { connect, useDispatch } from "react-redux"
import { fetchQuizes } from "../../../store/actions/quiz"
import Loader from "../../../components/UI/Loader"

const QuizList = (props) => {

	const dispatch = useDispatch() 

	useEffect(() => {
		dispatch(fetchQuizes())
		// eslint-disable-next-line
	}, [])

	const renderQuizes = () => {
		return props.quizes.map((quiz) => {
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

			{props.loading ? (
				<Loader />
			) : (
				<ul>{renderQuizes()}</ul>
			)}
		</div>
	)
}

function mapStateToProps(state) {
	return {
		quizes: state.quiz.quizes,
		loading: state.quiz.loading,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchQuizes: () => dispatch(fetchQuizes()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuizList)