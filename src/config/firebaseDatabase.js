// import firebase from "firebase"
import { alertError } from "components/common/UI/Alert"
import { firebaseDatabase } from "./firebase"

export const writeQuiz = async (quizes) => {
	try {
		const quizRef = firebaseDatabase.ref("quiz")

		quizRef.push(quizes).catch((e) => {
			alertError(e)
		})
	} catch (e) {
		alertError(e)
	}
}
