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
	try {
		const quizesFromDB = []
		const quizRef = firebaseDatabase.ref("quiz/")
		quizRef.on("value", (snapshot) => {
			const data = snapshot.val()
			console.log("snapshot: ", Object.keys(data)[0])
			quizesFromDB.push(data)
			// updateQuizRef(postElement, data)
		})
		return quizesFromDB
		// snapshots.map((snapshot, index) => {
		// 	return quizesFromDB.push({
		// 		id: snapshot.key,
		// 		name: `${index + 1}. ${
		// 			snapshot.val()[0].question
		// 		}`,
		// 	})
		// })
	} catch (e) {
		console.log("error :>> ", e)
	}
}
