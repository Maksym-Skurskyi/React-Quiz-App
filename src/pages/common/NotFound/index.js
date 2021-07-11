import { NavLink } from "react-router-dom"
import classes from "./NotFound.module.scss"

const NotFound = () => {
	return (
		<div className={classes.QuizList}>
			<h1>Page you requested was not found x(</h1>
			<NavLink to="/">Back to main</NavLink>
		</div>
	)
}
export default NotFound
