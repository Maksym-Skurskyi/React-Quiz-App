import { IntlProvider } from "react-intl"
import { useSelector } from "react-redux"
import messages_en from "i18n/en.json"
import messages_es from "i18n/es.json"
import { useEffect } from "react"

const AppIntlProvider = ({ children }) => {
	const currentLanguage =
		useSelector(
			(state) => state.language.selectedLanguage
		) ?? "en"

	const messages = {
		en: messages_en,
		es: messages_es,
	}

	useEffect(() => {
		document.documentElement.lang = currentLanguage
	}, [currentLanguage])

	return (
		<IntlProvider
			messages={messages[currentLanguage]}
			locale={currentLanguage}
		>
			{children}
		</IntlProvider>
	)
}

export default AppIntlProvider
