function Card (props) {
    //console.log("props dans card:", props);
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className="card__img" />
            <div className="card__img--shadow"></div>
            <h2 className="card__title">{props.title}</h2>
        </div>
    )
}

export default Card