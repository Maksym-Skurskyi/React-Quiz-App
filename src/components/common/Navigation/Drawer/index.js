import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "hocs/contexts/AuthContext"
import { privateMenu } from "components/common/menus/privateMenu"
import { publicMenu } from "components/common/menus/publicMenu"
import Backdrop from "components/common/UI/Backdrop"
import classes from "./Drawer.module.scss"

const Drawer = ({ onClose, isOpen }) => {
	const { currentUser, logout } = useAuth()

	const handleLogout = () => {
		logout()
			.then(() => {
				localStorage.setItem("isLogin", "false")
			})
			.catch((e) => {
				console.log(e)
			})
	}

	const renderLinks = (links) => {
		return links.map((link, index) => {
			return (
				<li key={index}>
					{link.type === "button" ? (
						<button
							onClick={() => {
								handleLogout()
								onClose()
							}}
						>
							{link.label}
						</button>
					) : (
						<NavLink
							to={link.to}
							exact={link.exact}
							activeClassName={classes.active}
							onClick={onClose}
						>
							{link.label}
						</NavLink>
					)}
				</li>
			)
		})
	}

	const cls = [classes.Drawer]

	if (!isOpen) {
		cls.push(classes.close)
	}

	const pMenu = privateMenu

	useEffect(() => {
		pMenu.push({
			label: "Logout",
			exact: false,
			type: "button",
			onClick: handleLogout,
		})
		// eslint-disable-next-line
	}, [pMenu])

	return (
		<>
			<nav className={cls.join(" ")}>
				<ul>
					{currentUser
						? renderLinks(pMenu)
						: renderLinks(publicMenu)}
				</ul>
			</nav>
			{isOpen && <Backdrop onClick={onClose} />}
		</>
	)
}

export default Drawer
