import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { quizAnswerClick } from "redux/quiz/actions"
import classes from "./AnswerItem.module.scss"

const AnswerItem = ({ answer }) => {
	const dispatch = useDispatch()
	const quizes = useSelector((state) => state.quizes)
	const [cls, setCls] = useState([classes.AnswerItem])

	useEffect(() => {
		if (quizes.answerState) {
			setCls(cls => [
				...cls,
				classes[quizes.answerState[answer.id]]
			])

		}
		return () => setCls([classes.AnswerItem])
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quizes.answerState])

	const onAnswerClick = (answerId) => {
		dispatch(quizAnswerClick(answerId, quizes))

	}

	return (
		<li
			className={cls.filter(Boolean).join(" ")}
			onClick={() => onAnswerClick(answer.id)}>
			{answer.text}
		</li>
	)
}

export default AnswerItem
