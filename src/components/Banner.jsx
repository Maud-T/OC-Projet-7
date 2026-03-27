function Banner({ image, texte }) {    
    return (
        <div className="banner">
            <img src={image} alt="Bannière Kasa représentant un paysage maritime" className="banner__image" />
            <span className="banner__text">{texte}</span>
        </div>
    )
}

export default Banner