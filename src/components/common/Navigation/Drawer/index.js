import { NavLink } from "react-router-dom"
import { useAuth } from "hocs/contexts/AuthContext"
import { privateMenu } from "components/common/menus/privateMenu"
import { publicMenu } from "components/common/menus/publicMenu"
import Backdrop from "components/common/UI/Backdrop"
import classes from "./Drawer.module.scss"
import { getIsLoggedIn } from "utils/helper"

const Drawer = ({ onClose, isOpen }) => {
	const { currentUser, logout } = useAuth()

	const pMenu = privateMenu

	const renderLinks = (links) => {
		return links.map((link, index) => {
			return (
				<li key={index}>
					<NavLink
						to={link.to}
						exact={link.exact}
						activeClassName={classes.active}
						onClick={onClose}
					>
						{link.label}
					</NavLink>
				</li>
			)
		})
	}

	const cls = [classes.Drawer]

	if (!isOpen) {
		cls.push(classes.close)
	}

	return (
		<>
			<nav className={cls.join(" ")}>
				<ul>
					{currentUser
						? renderLinks(pMenu)
						: renderLinks(publicMenu)}
					{getIsLoggedIn() && (
						<li>
							<button onClick={logout}>
								Logout
							</button>
						</li>
					)}
				</ul>

				{currentUser ? (
					<div className={classes.drawer__user}>
						Signed in
						<span> {currentUser.email}</span>
					</div>
				) : (
					<div></div>
				)}
			</nav>
			{isOpen && <Backdrop onClick={onClose} />}
		</>
	)
}

export default Drawer
