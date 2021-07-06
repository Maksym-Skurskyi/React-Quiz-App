import React from "react"
import { Link } from "react-router-dom"
import Button from "../UI/Button/Button"
import classes from "./FinishedQuiz.module.scss"

const FinishedQuiz = (props) => {
	const successCount = Object.keys(props.results).reduce(
		(total, key) => {
			if (props.results[key] === "success") {
				total++
			}

			return total
		},
		0
	)

	return (
		<div className={classes.FinishedQuiz}>
			<ul>
				{props.quiz.map((quizItem, index) => {
					const cls = [
						"fa",
						props.results[quizItem.id] === "error"
							? "fa-times"
							: "fa-check",
						classes[props.results[quizItem.id]],
					]

					return (
						<li key={index}>
							<strong>{index + 1}</strong>.&nbsp;
							{quizItem.question}
							<i className={cls.join(" ")}></i>
						</li>
					)
				})}
			</ul>

			<p>
				Correct {successCount} of {props.quiz.length}
			</p>

			<div>
				<Button onClick={props.onRetry} type="primary">
					Try again
				</Button>
				<Link to={"/"}>
					<Button type="success">Check other tests</Button>
				</Link>
			</div>
		</div>
	)
}

export default FinishedQuiz
