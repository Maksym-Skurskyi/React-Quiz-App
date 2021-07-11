import {
	useDispatch,
	useSelector,
} from "react-redux"
import { quizAnswerClick } from "redux/quiz/actions"
import classes from "./AnswerItem.module.scss"

const AnswerItem = ({ answer }) => {
	const dispatch = useDispatch()
	const state = useSelector(
		(state) => state.quizes
	)

	const onAnswerClick = (answerId) => {
		dispatch(quizAnswerClick(answerId, state))
	}

	const cls = [classes.AnswerItem]

	if (state) {
		const id = state.activeQuestion + 1
		cls.push(classes[state.results[id]])
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
