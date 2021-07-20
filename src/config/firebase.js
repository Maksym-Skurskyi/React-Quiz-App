import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"
import "firebase/messaging"
import { alertError } from "components/common/UI/Alert"

export const messagingSender =
	process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID

const appConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket:
		process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId:
		process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId:
		process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

const app = firebase.initializeApp(appConfig)

export const firebaseAuth = app.auth()

export const firebaseDatabase = app.database()

export const firebaseMessaging = app.messaging()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export const getToken = async () => {
	return await firebaseMessaging
		.getToken({
			vapidKey:
				"BCnU1AW7ZmEXux725R7TkmXd4EQUxCt0xlfQXQWC87rR0pwcxXtldvIAFV_8ENWAKDOlxR4YWKOPiWUjDkfISqU",
		})
		.then((currentToken) => {
			if (currentToken) {
				console.log(
					"current token for client: ",
					currentToken
				)
			} else {
				console.log(
					"No registration token available. Request permission to generate one."
				)
			}
		})
		.catch((err) => {
			alertError(
				"An error occurred while retrieving token:<br>",
				err
			)
		})
}

export default app
