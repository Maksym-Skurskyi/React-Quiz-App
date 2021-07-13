import firebase from "firebase"
import "firebase/database"

const db = () => firebase.database()

export const writeQuiz = async (quiz) => {
	// await firebase.database().ref("quiz/").set(quiz)
	const newPostKey = db()
		.ref()
		.child("quiz")
		.push().key
	const updates = {}
	updates["/quiz/" + newPostKey] = quiz
	return await db().ref().update(updates)
}
export const readQuizById = (quizId) => {
	const quiz = db().ref(`quiz/${quizId}`)
	quiz.on("value", async (snapshot) => {
		const data = snapshot.val()
		return await data
		// updateQuiz(postElement, data)
	})
}

// export const readQuizes = () => {
// 	const quizes = ref(db, "quiz/")
// 	onValue(quizes, (snapshot) => {
// 		const data = snapshot.val()
// 		updateStarCount(postElement, data)
// 	})
// }
