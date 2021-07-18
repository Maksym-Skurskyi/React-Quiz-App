import { Route, Redirect } from "react-router-dom"
import { getIsLoggedIn } from "utils/helper"

const PrivateRoute = ({
	component: Component,
	...rest
}) => {
	if (!getIsLoggedIn()) {
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

	return (
		<Route
			{...rest}
			render={(props) => <Component {...props} />}
		/>
	)
}

export default PrivateRoute
