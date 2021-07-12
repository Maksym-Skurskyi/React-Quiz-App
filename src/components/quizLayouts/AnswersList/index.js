import classes from "./AnswersList.module.scss"
import AnswerItem from "../AnswerItem"
import { useSelector } from "react-redux"

const AnswersList = ({questionId}) => {
	const answers = useSelector(
		(state) => state.quizes.quiz[questionId].answers
	)

	return (
		<ul className={classes.AnswersList}>
			{answers.map((answer, index) => {
				return (
					<AnswerItem
						key={index}
						answer={answer}
					/>
				)
			})}
		</ul>
	)
}

export default AnswersList
