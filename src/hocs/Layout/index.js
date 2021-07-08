import React, { useState } from "react"
import Drawer from "../../components/Navigation/Drawer"
import MenuToggle from "../../components/Navigation/MenuToggle"
import classes from "./Layout.module.scss"

const Layout = ({children}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const toggleMenuHandler = () => {
		setMenuIsOpen(!menuIsOpen)
	}
	const menuCloseHandler = () => {
		setMenuIsOpen(false)
	}
	return (
		<div className={classes.Layout}>
			<Drawer
				isOpen={menuIsOpen}
				onClose={menuCloseHandler}
			/>

			<MenuToggle
				onToggle={toggleMenuHandler}
				isOpen={menuIsOpen}
			/>

			<main>{children}</main>
		</div>
	)
}

export default Layout
