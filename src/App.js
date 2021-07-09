import Routes from "./routes/routes"
import { AuthProvider } from "./hocs/contexts/AuthContext"
import { BrowserRouter } from "react-router-dom"
import {store} from "./redux/store"
import { Provider } from "react-redux"
import Layout from "./hocs/Layout"

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
