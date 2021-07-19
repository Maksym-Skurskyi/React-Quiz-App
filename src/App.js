import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { AuthProvider } from "hocs/contexts/AuthContext"
import { store } from "redux/store"
import Routes from "routes/routes"
import { Flip, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect, useState } from "react"
import {
	firebaseMessaging,
	onMessageListener,
} from "config/firebase"
import { Toast } from "react-bootstrap"
import { Button } from "@material-ui/core"

const App = () => {
	const [show, setShow] = useState(false)
	const [notification, setNotification] = useState({
		title: "",
		body: "",
	})

	useEffect(() => {
		firebaseMessaging
			.requestPermission()
			.then(() => {
				return firebaseMessaging.getToken()
			})
			.then((token) => {
				console.log("token :>> ", token)
			})
			.catch((e) => {
				console.log("e :>> ", e)
			})
	}, [])

	onMessageListener()
		.then((payload) => {
			setShow(true)
			setNotification({
				title: payload.notification.title,
				body: payload.notification.body,
			})
			console.log(payload)
		})
		.catch((err) => console.log("failed: ", err))
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<Routes />
				</AuthProvider>
				<ToastContainer
					transition={Flip}
					limit={1}
				/>
				<Toast
					onClose={() => setShow(false)}
					show={show}
					delay={3000}
					autohide
					animation
					style={{
						position: "absolute",
						top: 20,
						right: 20,
						minWidth: 200,
					}}
				>
					<Toast.Header>
						<img
							src="holder.js/20x20?text=%20"
							className="rounded mr-2"
							alt=""
						/>
						<strong className="mr-auto">
							{notification.title}
						</strong>
						<small>just now</small>
					</Toast.Header>
					<Toast.Body>{notification.body}</Toast.Body>
				</Toast>
				<Button onClick={() => setShow(true)}>Show Toast</Button>
			</BrowserRouter>
		</Provider>
	)
}

export default App
