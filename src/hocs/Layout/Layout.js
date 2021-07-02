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

// class Layout extends Component {
// 	state = {
// 		menu: false,
// 	}

// 	toggleMenuHandler = () => {
// 		this.setState({
// 			menu: !this.state.menu,
// 		})
// 	}

// 	menuCloseHandler = () => {
// 		this.setState({
// 			menu: false,
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className={classes.Layout}>
// 				<Drawer
// 					isOpen={this.state.menu}
// 					onClose={this.menuCloseHandler}
// 					isAuthenticated={this.props.isAuthenticated}
// 				/>

// 				<MenuToggle
// 					onToggle={this.toggleMenuHandler}
// 					isOpen={this.state.menu}
// 				/>

// 				<main>{this.props.children}</main>
// 			</div>
// 		)
// 	}
// }

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.auth.token,
	}
}

export default connect(mapStateToProps, null)(Layout)
