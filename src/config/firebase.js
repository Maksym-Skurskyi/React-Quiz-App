import firebase from "firebase/app"
import "firebase/auth"

const appConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

const app = firebase.initializeApp(appConfig)

export const firebaseAuth = app.auth()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export default app