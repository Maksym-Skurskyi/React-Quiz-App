import {
	Suspense,
	useEffect,
	useState,
} from "react"
import {
	Route,
	Switch,
} from "react-router-dom"
import { commonRoutes } from "./commonRoutes"
import { privateRoutes } from "./privateRoutes"
import { publicRoutes } from "./publicRoutes"
import Loader from "components/common/UI/Loader"

const Routes = () => {
	const [loggedIn, setLoggedIn] = useState(false)

	useEffect(() => {
		setLoggedIn(localStorage.getItem("isLogin"))
	}, [loggedIn])

	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				{!loggedIn
					? [
							...commonRoutes,
							...publicRoutes,
					  ].map((route, index) => {
							return (
								<Route
									{...route}
									key={`r_${index}_${route.path}`}
								/>
							)
					  })
					: [
							...privateRoutes,
							...commonRoutes,
							...publicRoutes,
					  ].map((route, index) => {
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
