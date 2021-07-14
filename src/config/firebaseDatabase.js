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

