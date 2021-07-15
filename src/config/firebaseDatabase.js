// import firebase from "firebase"
import { firebaseDatabase } from "./firebase"

export const writeQuiz = async (quizes) => {
	try {
		const quizRef = firebaseDatabase.ref("quiz")

		quizRef.push(quizes).catch((error) => {
			console.log("error :>>", error)
		})
	} catch (e) {
		console.log("e :>> ", e)
	}
}

export const readQuizes = async () => {
	const quizRef = firebaseDatabase.ref("quiz/")

	const quizes = []
	quizRef.on("value", (snapshot) => {
		const snapshots = snapshot.val()
		Object.keys(snapshots).forEach(
			(key, index) => {
				quizes.push({
					id: key,
					name: `Quiz №${index + 1}`,
				})
			}
		)
		console.log(
			"quizes in DatabaseConfgi: ",
			quizes
		)

		return quizes
	})
	// snapshots.map((snapshot, index) => {
	// 	return quizesFromDB.push({
	// 		id: snapshot.key,
	// 		name: `${index + 1}. ${
	// 			snapshot.val()[0].question
	// 		}`,
	// 	})
	// })
}

export const readQuizById = async (quizId) => {
	const quizRef = firebaseDatabase.ref(
		`quiz/${quizId}`
	)
	// const quizes = []
	quizRef.on("value", (snapshot) => {
		const quiz = snapshot.val()

		console.log(
			"quizById in DatabaseConfgi: ",
			quiz
		)

		return quiz
	})

}
