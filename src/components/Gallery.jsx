import { Link } from "react-router-dom"
import logements from "../datas/logements.json"
import Card from "./Card.jsx"

function Gallery() {
    return (
        <div className="gallery">
            {logements.map((logement) => {
                return (
                    <article key={logement.id}>
                        <Link to={`/accommodation/${logement.id}`}>
                            < Card image={logement.cover} title={logement.title} />
                        </Link>
                    </article>
                );
            })}
        </div>
    )
}

export default Gallery