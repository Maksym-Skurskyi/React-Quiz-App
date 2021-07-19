import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import classes from "./FinishedQuiz.module.scss"

const FinishedQuiz = ({ onRetry }) => {
	const quizes = useSelector((state) => state.quizes)
	const [successCount, setSuccessCount] = useState(0)

	const {results, quiz} = quizes

	useEffect(() => {
		setSuccessCount(
			Object.keys(results).reduce((total, key) => {
				if (results[key] === "success") {
					total++
				}

				return total
			}, 0)
		)
	}, [results])

	return (
		<div className={classes.FinishedQuiz}>
			<ul>
				{quiz.map((quizItem, index) => {
					const cls = ["fa", results[quizItem.id] === "error" ? "fa-times" : "fa-check", classes[results[quizItem.id]]]

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
				Correct {successCount} of {quiz.length}
			</p>

			<div className={classes.finishedQuizButtons}>
				<button onClick={onRetry}>Try again</button>
				<Link to={"/"}>
					<button>Check other tests</button>
				</Link>
			</div>
		</div>
	)
}

export default FinishedQuiz
