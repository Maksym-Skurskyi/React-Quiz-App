import {
	Suspense, useEffect,
} from "react"
import { Route, Switch } from "react-router-dom"
import { commonRoutes } from "./commonRoutes"
import { privateRoutes } from "./privateRoutes"
import { publicRoutes } from "./publicRoutes"
import Loader from "components/common/UI/Loader"
import PrivateRoute from "hocs/PrivateRoute"
import { useDispatch } from "react-redux"
import { setSelectedLanguage } from "redux/language/actions"

const Routes = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		const language = localStorage.getItem("locale")
		dispatch(setSelectedLanguage(language))
	},[dispatch])
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
