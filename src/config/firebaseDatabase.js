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

// export const readQuizes = async (snapshots, error) => {
// 	try {
// 		const quizesFromDB = []
// 		snapshots.map((snapshot, index) => {
// 			quizesFromDB.push({
// 				id: snapshot.key,
// 				name: `${index}. ${
// 					snapshot.val()[0].question
// 				}`,
// 			})
// 		})
// 		return quizesFromDB
// 	} catch (e) {
// 		console.log("e :>> ", error)
// 	}
// }

// export const readQuizById = (quizId) => {
// 	try {
// 		const dbRef = firebaseDatabase.ref()
// 		dbRef
// 			.child("quiz")
// 			.child(quizId)
// 			.get()
// 			.then((snapshot) => {
// 				if (snapshot.exists()) {
// 					console.log(snapshot.val())
// 				} else {
// 					console.log("No data available")
// 				}
// 			})
// 			.catch((error) => {
// 				console.error(error)
// 			})
// 	} catch (e) {
// 		console.log("e :>> ", e)
// 	}
// }

// export const readQuizes = () => {
// 	const quizes = ref(db, "quiz/")
// 	onValue(quizes, (snapshot) => {
// 		const data = snapshot.val()
// 		updateStarCount(postElement, data)
// 	})
// }
