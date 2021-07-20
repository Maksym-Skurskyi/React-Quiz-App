import {
	createContext,
	useContext,
	useState,
} from "react"
import { IntlProvider } from "react-intl"
import English from "i18n/en.json"
import Spanish from "i18n/es.json"

export const I18nContext = createContext()

const local = navigator.language
let lang
if (local === "en") {
	lang = English
} else if(local === "es"){
	lang = Spanish
}

export const useI18n = () => {
	return useContext(I18nContext)
}

export const I18nProvider = ({ children }) => {
	const [locale, setLocale] = useState(local)
	const [messages, setMessages] = useState(lang)

	function selectLanguage(e) {
		const newLocale = e.target.value
		setLocale(newLocale)
		if (newLocale === "en") {
			setMessages(English)
		} else {
			setMessages(Spanish)
		}
	}

	return (
		<I18nContext.Provider
			value={{ locale, selectLanguage }}
		>
			<IntlProvider
				messages={messages}
				locale={locale}
			>
				{children}
			</IntlProvider>
		</I18nContext.Provider>
	)
}
