import classes from "./Auth.module.css"
import React, { Component } from "react"
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"

export default class Auth extends Component {
	loginHandler = () => {}
	registerHandler = () => {}
	submitHandler = e => {
		e.preventDefault()
	}


	render() {
		return (
			<div className={classes.Auth}>
				<div>
					<h1>Authorization</h1>

					<form className={classes.AuthForm} onSubmit={this.submitHandler}>
						<Input label="Email"/>
						<Input label="Password"/>

						<Button type="success" onClick={this.loginHandler}>
							Sign in
						</Button>
						<Button type="primary" onClick={this.registerHandler}>
							Sign up
						</Button>
					</form>
				</div>
			</div>
		)
	}
}
