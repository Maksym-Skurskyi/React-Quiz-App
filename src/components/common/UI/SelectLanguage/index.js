import { useI18n } from "hocs/contexts/I18nContext"
import classes from "./SelectLanguage.module.scss"

const SelectLanguage = () => {
	const context = useI18n()

	return (
		<div className={classes.selectLanguage}>
			<select
			value={context.locale}
			onChange={context.selectLanguage}
		>
			<option value="en">English</option>
			<option value="es">Spanish</option>
		</select>
		</div>
	)
}

export default SelectLanguage
