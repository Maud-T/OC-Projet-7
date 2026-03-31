import { useState } from "react";

function Collapse ({ title, description }) {

    // Etat qui indique si le contenu est ouvert
    const [isOpen, setIsOpen] = useState(false);

                // Fonction qui permet d'effectuer le changement
    const toggle = () => setIsOpen(prev => !prev);

    return (
        <div className="collapse">
            <button className="collapse__title" onClick={toggle}>
                {title}
                <span  className="collapse__button">
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-up"></i>
                        ) : (
                        <i className="fa-solid fa-chevron-down"></i>
                        )}
                </span>
            </button>
            {isOpen && (
                <div className="collapse__texte">
                    <p>{description}</p>
                </div>
            )}
        </div>)
}

export default Collapse