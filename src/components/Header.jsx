import { Link } from 'react-router-dom'
import logo from "../assets/LogoHeader.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="header__logo" />
            <nav className="header__nav">
                <Link to="/" className="header__nav__link">Accueil</Link>
                <Link to="/about" className="header__nav__link">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header