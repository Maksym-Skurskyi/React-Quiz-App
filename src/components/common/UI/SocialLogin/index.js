import classes from "./SocialLogin.module.scss"

export const SocialLogin = ({type, text, fn, loading }) => {
	return (
		<div className={classes.SocialLogin}>
			<button
				type={type || "button"}
				onClick={fn}
				disabled={loading}
			>
				{text || "button"}
			</button>
		</div>
	)
}
