import { Route, Redirect } from "react-router-dom"
import { useState } from "react"
import NotFound from "pages/common/NotFound"

const PrivateRoute = ({
	component: Component,
	denyShowLoginPage,
	...rest
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(
		false
	)
	setIsLoggedIn(localStorage.getItem("isLogin"))

	if (!isLoggedIn) {
		return (
			<Route
				{...rest}
				render={() => (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				)}
			/>
		)
	}

	if (isLoggedIn && denyShowLoginPage) {
		return (
			<Route
				{...rest}
				render={() => (
					<Redirect
						to={{
							pathname: "/",
						}}
					/>
				)}
			/>
		)
	}

	if (isLoggedIn) {
		return <Route component={NotFound} />
	}

	return (
		<Route
			{...rest}
			render={(props) => <Component {...props} />}
		/>
	)
}

export default PrivateRoute
