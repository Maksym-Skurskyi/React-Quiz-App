import PageLayout from "hocs/PageLayout"
import { NavLink } from "react-router-dom"
import classes from "./NotFound.module.scss"

const NotFound = () => {
	return (
		<PageLayout
			title={`404 Requested page was not found`}
			description={"Write correct path to start answering the questions, 404"}
			keywords={"404, not found, can't pass the quiz"}
		>
			<div className={classes.QuizList}>
				<h1>
					Page you requested was not found x(
				</h1>
				<NavLink to="/">Back to main</NavLink>
			</div>
		</PageLayout>
	)
}
export default NotFound
