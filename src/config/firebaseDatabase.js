import {
	getDatabase,
	ref,
	set,
	onValue,
} from "firebase/database"

const db = getDatabase()

export const writeQuiz = (
	name,
	email,
	imageUrl
) => {
	set(ref(db, "quiz/"), {
		username: name,
		email: email,
		profile_picture: imageUrl,
	})
}

export const readOneQuiz = () => {
	const starCountRef = ref(
		db,
		"quiz/" + quizId
	)
	onValue(starCountRef, (snapshot) => {
		const data = snapshot.val()
		updateStarCount(postElement, data)
	})
}

export const readQuizes = () => {
	const starCountRef = ref(
		db,
		"quiz/"
	)
	onValue(starCountRef, (snapshot) => {
		const data = snapshot.val()
		updateStarCount(postElement, data)
	})
}
