// Scripts for firebase and firebase messaging
import app, {
	firebaseMessaging,
} from "../src/config/firebase"

importScripts(
	"https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"
)
importScripts(
	"https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js"
)

// Retrieve firebase messaging

firebaseMessaging.onBackgroundMessage(function (payload) {
	console.log("Received background message ", payload)

	const notificationTitle = "hello"
	const notificationOptions = {
		body: payload.notification.body,
		icon:
			"https://www.blast.hk/data/avatars/o/424/424595.jpg?1618322024",
	}

	self.registration.showNotification(
		notificationTitle,
		notificationOptions
	)
})
