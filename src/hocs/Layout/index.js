import React, { useState } from "react"
import Drawer from "../../components/common/Navigation/Drawer"
import MenuToggle from "../../components/common/Navigation/MenuToggle"
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
