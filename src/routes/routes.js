import { Suspense } from "react"
import { connect } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import Loader from "../components/UI/Loader/Loader"
import { commonRoutes } from "./commonRoutes"
import { privateRoutes } from "./privateRoutes"

const Routes = props => {
	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				{props.isAuthenticated
					? privateRoutes.map((route, index) => {
							return <Route {...route} key={`r_${index}_${route.path}`} />
					  })
					: commonRoutes.map((route, index) => {
							return <Route {...route} key={`r_${index}_${route.path}`} />
					  })}
				<Redirect to="/" />
			</Switch>
		</Suspense>
	)
}

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.auth.token,
	}
}

export default connect(mapStateToProps, null)(Routes)
