import starEmpty from "../assets/starEmpty.png"
import starFull from "../assets/starFull.png"

function Rate(props) {
    
    const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    
    return (
        <div className="rate">
            {notes.map((note) =>
                score >= note ? (
                    <img
                        key={note.toString()}
                        className="star"
                        src={starFull}
                        alt="étoile positive"
                    />
                    ) : (
                    <img
                        key={note.toString()}
                        className="star"
                        src={starEmpty}
                        alt="étoile vide"
                />
            )
        )}
      </div>
    );
}

export default Rate

// AUTRE METHODE
/* 
function Rate({ score }) {
    
    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= score ? starFull : starEmpty} alt="star" />
                )
            })}
        </div>
    )
}

export default Rate
*/