import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="notFound">
            <h1 className="notFound__title">404</h1>
            <h3 className="notFound__subtitle">Oups! La page que vous demandez n'existe pas.</h3>
            <Link to="/" className="notFound__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default NotFound