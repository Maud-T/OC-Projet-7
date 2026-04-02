import { useState } from "react"
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"

function SlideShow({ slides }) {
    
    const [slideIndex, setSlideIndex] = useState(0) // Définition de l'index de la 1ère photo
    const totalSlides = slides.length
    console.log("nombre de photos:", totalSlides)

    // Fonction permettant d'aller à la photo suivante 
    const nextSlide = () => {
        setSlideIndex(slideIndex + 1)
        // Affichage de la première photo si on clic sur la flèche "suivante" en étant sur la dernière photo
        if(slideIndex === totalSlides - 1)
            setSlideIndex(0)
    }

    // Fonction permettant d'aller à la photo précédente 
    const previousSlide = () => {
        setSlideIndex(slideIndex - 1)
        // Affichage de la dernière photo si on clic sur la flèche "retour"" en étant sur la première photo
        if(slideIndex === 0)
            setSlideIndex(totalSlides - 1)
    }

    return (
        <section className="slideShow">
            {totalSlides > 1 && (
                <div className="slideShow__arrows">
                    <img 
                        className=" slideShow__arrows__arrow" 
                        src={arrowLeft} 
                        alt="Flèche pour aller à l'image précédente" 
                        onClick={previousSlide}
                    />
                    <img 
                        className="slideShow__arrows__arrow" 
                        src={arrowRight} 
                        alt="Flèche pour aller à l'image suivante" 
                        onClick={nextSlide}
                    />            
                    <p className="slideShow__numbers">
                        {slideIndex + 1}/{totalSlides}
                    </p>
                </div>
            )}
            <img src={slides[slideIndex]} className="slideShow__image"/>
        </section>
    )
}

export default SlideShow

// Si j'avais eu un compte pro Font Awesome ...
/*
            {totalSlides > 1 && (
                <button 
                    type="button"
                    className="slideShow__arrowLeft"
                    onClick={previousSlide}
                    >
                        <span><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
                </button>  
            )}
            {totalSlides > 1 && (
                <button 
                    type="button"
                    classeName="slideShow__arrow__right"  
                    onClick={nextSlide}
                >
                    <span><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
                </button>
            )}
*/