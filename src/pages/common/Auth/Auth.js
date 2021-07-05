import classes from "./Auth.module.scss"
import React from "react"
import { connect } from "react-redux"
import { auth } from "../../../store/actions/auth"
import AuthForm from "../../../components/forms/AuthForm/AuthForm"

const Auth = props => {
	return (
		<div className={classes.Auth}>
			<div>
				<h1>Authorization</h1>

				<AuthForm auth={props.auth} />

			</div>
		</div>
	)
}

function mapDispatchToProps(dispatch) {
	return {
		auth: (email, password, isLogin) =>
			dispatch(auth(email, password, isLogin)),
	}
}

export default connect(null, mapDispatchToProps)(Auth)
