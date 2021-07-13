import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { AuthProvider } from "hocs/contexts/AuthContext"
import { store } from "redux/store"
import Layout from "hocs/Layout"
import Routes from "routes/routes"
import {
	ToastContainer,
	Flip,
} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import MetaHelmet from "components/common/UI/Helmet"

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MetaHelmet
					title={"Quiz-app on React"}
					description={"Create and pass the quizes"}
					keywords={"Own quizes, create quiz, create test"}
				/>
				<AuthProvider>
					<Layout>
						<Routes />
					</Layout>
				</AuthProvider>
				<ToastContainer
					transition={Flip}
					limit={1}
				/>
			</BrowserRouter>
		</Provider>
	)
}

export default App
