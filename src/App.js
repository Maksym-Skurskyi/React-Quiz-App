import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { AuthProvider } from "hocs/contexts/AuthContext"
import { store } from "redux/store"
import Layout from "hocs/Layout"
import Routes from "routes/routes"

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<Layout>
						<Routes />
					</Layout>
				</AuthProvider>
			</BrowserRouter>
		</Provider>
	)
}

export default App
