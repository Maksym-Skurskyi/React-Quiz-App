import { useDispatch } from "react-redux"
import { finishCreateQuiz } from "redux/quizCreate/actions"
import QuizCreateForm from "components/forms/QuizCreateForm"
import classes from "./QuizCreator.module.scss"
import MetaHelmet from "components/common/UI/Helmet"

const QuizCreator = () => {
	const dispatch = useDispatch()

	const submitHandler = (values) => {
		const vals = values.questions.map(
			(question) => {
				return {
					question: question.question,
					id: values.questions.length + 1,
					rightAnswerId: question.rightAnswerId,
					answers: [
						{
							text: question.option1,
							id: question.hOption1,
						},
						{
							text: question.option2,
							id: question.hOption2,
						},
						{
							text: question.option3,
							id: question.hOption3,
						},
						{
							text: question.option4,
							id: question.hOption4,
						},
					],
				}
			}
		)
		dispatch(finishCreateQuiz(vals))
	}

	return (
		<div className={classes.QuizCreator}>
			<MetaHelmet
				title={`Creating quiz`}
				description={"Create a quiz so you or your friends can pass and share it"}
				keywords={"Quiz creating, create number of quizes, create a few quizes"}
			/>
			<div>
				<h1>Quiz creating</h1>
				
				<QuizCreateForm
					onSubmit={submitHandler}
				/>
			</div>
		</div>
	)
}

export default QuizCreator
