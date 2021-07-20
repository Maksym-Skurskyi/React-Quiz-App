import React, { useState } from "react"
import Drawer from "components/common/Navigation/Drawer"
import MenuToggle from "components/common/Navigation/MenuToggle"
import MetaHelmet from "components/common/UI/MetaHelmet"

const PageLayout = ({
	showSidebar = true,
	title,
	description,
	keywords,
	children,
}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(
		false
	)

	const toggleMenuHandler = () => {
		setMenuIsOpen(!menuIsOpen)
	}
	const menuCloseHandler = () => {
		setMenuIsOpen(false)
	}

	return (
		<div className={"PageLayout"}>
			<MetaHelmet
				title={title || "Quiz-app on React"}
				description={
					description ||
					"Create and pass the quizes"
				}
				keywords={
					keywords ||
					"Own quizes, create quiz, create test"
				}
			/>
			{showSidebar && (
				<>
					<Drawer
						isOpen={menuIsOpen}
						onClose={menuCloseHandler}
					/>
					<MenuToggle
						onToggle={toggleMenuHandler}
						isOpen={menuIsOpen}
					/>
				</>
			)}
			<main>{children}</main>
		</div>
	)
}

export default PageLayout
