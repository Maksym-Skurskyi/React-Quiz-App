import { Route, Switch } from "react-router"
import Layout from "./hoc/Layout/Layout"
import Quiz from './containers/Quiz/Quiz'
import QuizCreator from "./containers/QuizCreator/QuizCreator"
import Auth from "./containers/Auth/Auth"
import QuizList from "./containers/QuizList/QuizList"

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path='/auth' render={ () => <Auth/>}/>
					<Route path='/quiz-creator' render={ () => <QuizCreator/>}/>
					<Route path='/quiz/:id' render={ () => <Quiz/>}/>
					<Route path='/' render={ () => <QuizList/>}/>
				</Switch>
			</Layout>
		</div>
	)
}

export default App
