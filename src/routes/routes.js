import { Suspense } from "react"
import {
	Redirect,
	Route,
	Switch,
} from "react-router-dom"
import { commonRoutes } from "./commonRoutes"
import { privateRoutes } from "./privateRoutes"
import Loader from "components/common/UI/Loader"

const Routes = () => {
	const isLogin = localStorage.getItem("isLogin")
	console.log(isLogin)

	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				{isLogin === "true"
					? privateRoutes.map((route, index) => {
							return (
								<Route
									{...route}
									key={`r_${index}_${route.path}`}
								/>
							)
					  })
					: commonRoutes.map((route, index) => {
							return (
								<Route
									{...route}
									key={`r_${index}_${route.path}`}
								/>
							)
					  })}
				<Redirect to="/" />
			</Switch>
		</Suspense>
	)
}

export default Routes
