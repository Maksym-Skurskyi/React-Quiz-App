import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { AuthProvider } from "hocs/contexts/AuthContext"
import { store } from "redux/store"
import Layout from "hocs/Layout"
import Routes from "routes/routes"
import { ToastContainer, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<Layout>
						<Routes />
					</Layout>
				</AuthProvider>
				<ToastContainer transition={Flip}/>
			</BrowserRouter>
		</Provider>
	)
}

export default App
