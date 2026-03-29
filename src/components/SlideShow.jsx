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
                <img 
                    classeName="slideShow__arrow__left" 
                    src={arrowLeft} 
                    alt="Flèche pour aller à l'image précédente" 
                    onClick={previousSlide}/>
            )}
            {totalSlides > 1 && (
                <img 
                classeName="slideShow__arrow__right" 
                src={arrowRight} 
                alt="Flèche pour aller à l'image suivante" 
                onClick={nextSlide}/>
            )}
            <img src={slides[slideIndex]} className="slideShow__image"/>
            <p className="slideShow__numbers">
                {slideIndex + 1}/{totalSlides}
            </p>
        </section>
    )
}

export default SlideShow