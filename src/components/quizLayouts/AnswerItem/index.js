import {
	useDispatch,
	useSelector,
} from "react-redux"
import { quizAnswerClick } from "redux/quiz/actions"
import classes from "./AnswerItem.module.scss"

const AnswerItem = ({ answer }) => {
	const dispatch = useDispatch()
	const quizes = useSelector(
		(state) => state.quizes
	)

	const onAnswerClick = (answerId) => {
		dispatch(quizAnswerClick(answerId, quizes))
	}

	const cls = [classes.AnswerItem]

	if (quizes.answerState) {
		const id = answer.id
		cls.push(classes[quizes.answerState[id]])
	}

	return (
		<li
			className={cls.join(" ")}
			onClick={() => onAnswerClick(answer.id)}
		>
			{answer.text}
		</li>
	)
}

export default AnswerItem
