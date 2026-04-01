import { NavLink } from "react-router-dom"
import logo from "../assets/LogoHeader.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="header__logo" />
            <nav className="header__nav">
                <NavLink 
                    to="/" 
                    className="header__nav__link"
                    style={({ isActive }) => ({"text-decoration": isActive ? 'underline' : 'none',})}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    className="header__nav__link"
                    style={({ isActive }) => ({"text-decoration": isActive ? 'underline' : 'none',})}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header