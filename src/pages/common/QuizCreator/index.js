import { useDispatch } from "react-redux"
import { finishCreateQuiz } from "redux/quizCreate/actions"
import QuizCreateForm from "components/forms/QuizCreateForm"
import classes from "./QuizCreator.module.scss"
import PageLayout from "hocs/PageLayout"

const QuizCreator = () => {
	const dispatch = useDispatch()

	const submitHandler = (
		values,
		{ resetForm }
	) => {
		dispatch(finishCreateQuiz(values))
		resetForm({})
	}

	return (
		<PageLayout
			title={`Creating quiz`}
			description={
				"Create a quiz so you or your friends can pass and share it"
			}
			keywords={
				"Quiz creating, create number of quizes, create a few quizes"
			}
		>
			<div className={classes.QuizCreator}>
				<div className={"container"}>
					<h1>
						Quiz creator
					</h1>

					<QuizCreateForm
						onSubmit={submitHandler}
					/>
				</div>
			</div>
		</PageLayout>
	)
}

export default QuizCreator
