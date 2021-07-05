import React, { useState } from "react"
import { connect } from "react-redux"
import Drawer from "../../components/Navigation/Drawer/Drawer"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle"
import classes from "./Layout.module.scss"

const Layout = (props) => {
	const [state, setState] = useState({ menu: false })

	const toggleMenuHandler = () => {
		setState({
			menu: !state.menu,
		})
	}
	const menuCloseHandler = () => {
		setState({
			menu: false,
		})
	}
	return (
		<div className={classes.Layout}>
			<Drawer
				isOpen={state.menu}
				onClose={menuCloseHandler}
				isAuthenticated={props.isAuthenticated}
			/>

			<MenuToggle onToggle={toggleMenuHandler} isOpen={state.menu} />

			<main>{props.children}</main>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.auth.token,
	}
}

export default connect(mapStateToProps, null)(Layout)
