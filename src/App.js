import Layout from "./hocs/Layout/Layout"
import { connect } from "react-redux"
import { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { autoLogin } from "./store/actions/auth"
import Routes from "./routes/routes"

const App = props => {
	useEffect(() => {
		props.autoLogin()
		// eslint-disable-next-line
	}, [])

	return (
		<Layout>
			<Routes />
		</Layout>
	)
}

function mapDispatchToProps(dispatch) {
	return {
		autoLogin: () => dispatch(autoLogin()),
	}
}

export default withRouter(connect(null, mapDispatchToProps)(App))
