import { useDispatch } from "react-redux"
import { finishCreateQuiz } from "redux/quizCreate/actions"
import QuizCreateForm from "components/forms/QuizCreateForm"
import classes from "./QuizCreator.module.scss"
import MetaHelmet from "components/common/UI/Helmet"

const QuizCreator = () => {
	const dispatch = useDispatch()

	const submitHandler = (values) => {
		console.log("values: ", values)
		dispatch(finishCreateQuiz(values))
	}

	return (
		<div className={classes.QuizCreator}>
			<MetaHelmet
				title={`Creating quiz`}
				description={
					"Create a quiz so you or your friends can pass and share it"
				}
				keywords={
					"Quiz creating, create number of quizes, create a few quizes"
				}
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
