import {
	Suspense,
} from "react"
import { Route, Switch } from "react-router-dom"
import { commonRoutes } from "./commonRoutes"
import { privateRoutes } from "./privateRoutes"
import { publicRoutes } from "./publicRoutes"
import Loader from "components/common/UI/Loader"
import PrivateRoute from "hocs/PrivateRoute"

const Routes = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				{[
					...privateRoutes,
					...commonRoutes,
					...publicRoutes,
				]?.map((route, index) => {
					if (route?.isAdminAuth) {
						return (
							<PrivateRoute
								{...route}
								key={`r_${index}_${route.path}`}
							/>
						)
					}

					return (
						<Route
							{...route}
							key={`r_${index}_${route.path}`}
						/>
					)
				})}
			</Switch>
		</Suspense>
	)
}

export default Routes
