import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { quizAnswerClick } from "../../../../../redux/quiz/actions"
import classes from "./AnswerItem.module.scss"

const AnswerItem = ({answer}) => {
	const dispatch = useDispatch()
	const state = useSelector(state => state.quizes)
	console.log(state)

	const onAnswerClick = (answerId) => {
		dispatch(quizAnswerClick(answerId, state))
	}
	
	const cls = [classes.AnswerItem]

	
	if (state) {
		cls.push(classes[state])
	}

	return (
		<li
			className={cls.join(" ")}
			onClick={() => onAnswerClick(answer.id)}>
			{answer.text}
		</li>
	)
}

export default AnswerItem
