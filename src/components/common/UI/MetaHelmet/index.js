import { Helmet } from "react-helmet"

const MetaHelmet = ({
	title,
	description,
	keywords,
}) => {
	return (
		<Helmet>
			{title && <title>{title}</title>}
			{description && (
				<meta
					name="description"
					content={description}
				/>
			)}
			{keywords && (
				<meta
					name="keywords"
					content={keywords}
				/>
			)}
		</Helmet>
	)
}

export default MetaHelmet
