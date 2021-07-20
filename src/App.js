import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { AuthProvider } from "hocs/contexts/AuthContext"
import { store } from "redux/store"
import Routes from "routes/routes"
import {
	Flip,
	ToastContainer,
} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { I18nProvider } from "hocs/contexts/I18nContext"

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<I18nProvider>
					<AuthProvider>
						<Routes />
					</AuthProvider>
				</I18nProvider>
				<ToastContainer
					transition={Flip}
					limit={1}
				/>
			</BrowserRouter>
		</Provider>
	)
}

export default App
