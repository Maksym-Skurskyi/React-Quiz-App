import {
	useDispatch,
	useSelector,
} from "react-redux"
import classes from "./SelectLanguage.module.scss"
import { setSelectedLanguage } from "redux/language/actions"

const SelectLanguage = () => {
	const dispatch = useDispatch()
	const currentLanguage =
		useSelector(
			(state) =>
				state.language.selectedLanguage)

	const changeHandler = (e) => {
		const value = e.target.value
		dispatch(setSelectedLanguage(value))
	}

	return (
		<div className={classes.selectLanguage}>
			<select
				value={currentLanguage}
				onChange={changeHandler}
			>
				<option value="en">English</option>
				<option value="es">Spanish</option>
			</select>
		</div>
	)
}

export default SelectLanguage
