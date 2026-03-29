import { useState } from "react";
//import imageArrowTop from "../assets/arrowTop.png"
//import imageArrowBottom from "../assets/arrowBottom.png"

function Collapse ({ title, description }) {

    // Etat qui indique si le contenu est ouvert
    const [isOpen, setIsOpen] = useState(false);

    // Fonction qui permet d'effectuer le changement
    const toggle = () => setIsOpen(prev => !prev);

    return (
        <div className="collapse">
            <button 
                type="button"
                className="collapse__title" 
                onClick={toggle}
                aria-expanded={isOpen}
                aria-controls={`collapse-content-${title.replace(/\s+/g, "-")}`}
            >
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
                <div
                id={`collapse-texte-${title.replace(/\s+/g, "-")}`}
                className="collapse__texte"
                >
                    {description}
                </div>
            )}
        </div>)}
/*
            <div className="collapse__texte">    
                {isOpen && <p>{description}</p>}
            </div>
        </div>
    )    
}*/

export default Collapse
                /*return (
        <div className="collapse">
            <div className="collapse__title">
                <p>{title}</p>
                <p onCLick={toggle} className="collapse__button">
                    {isOpen ? (
                        <i class="fa-solid fa-chevron-up"></i>
                        ) : (
                        <i class="fa-solid fa-chevron-down"></i>
                        )}
                </p>
            </div>

            <div className="collapse__texte">    
                {isOpen && <p>{texte}</p>}
            </div>
        </div>*/