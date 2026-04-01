import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import data from "../datas/logements.json"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SlideShow from "../components/SlideShow"
import Rate from "../components/Rate"
import Collapse from "../components/Collapse"

function Accommodation() {

    const { id } = useParams();
    const dataLogements = data.find(logement => logement.id === id);
    console.log(dataLogements);

    return (
        <div>
            {dataLogements ? (
                <div>
                    <div className="main-container">
                    <Header/>
                    <div className="accommodation">
                        <SlideShow slides={dataLogements.pictures}/>
                            <div className="fiche">
                                <section className="fiche__section">
                                    <div className="fiche__section__top">
                                        <div className="titlesAndTags">
                                            <div className="titlesAndTags__titles">
                                                <h1>{dataLogements.title}</h1>
                                                <h2>{dataLogements.location}</h2>
                                            </div>
                                        <div className="titlesAndTags__tags">
                                            {dataLogements.tags.map((tag, i) => (
                                                <span key={i} className="titlesAndTags__tags__button">{tag}</span>
                                            ))}
                                        </div>
                                    </div>         
                                    <div className="HostAndRating">
                                        <div className="HostAndRating__host">
                                            <p>{dataLogements.host.name}</p>
                                            <img src={dataLogements.host.picture} alt="Photo du propriétaire"></img>
                                        </div>
                                        <div className="HostAndRating__rating">
                                            <Rate score={dataLogements.rating} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="fiche__section">
                                <div className="fiche__section__bottom">
                                    <div className="fiche__section__bottom__collapse fiche__section__bottom__collapse__description">
                                        <Collapse 
                                            title="Description"
                                            description={dataLogements.description}
                                        />
                                    </div>
                                    <div className="fiche__section__bottom__collapse">
                                        <Collapse
                                            title="Equipements"
                                            description={
                                                dataLogements.equipments.map((equipements, i) => (
                                                    <ul key={i}>
                                                        <li>{equipements}</li>    
                                                    </ul> 
                                                ))
                                            }
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>              
                    </div>
                </div>
                <Footer />
            </div>
            ) : (<Navigate replace to="/notFound"/>)}
        </div>
    )
}

export default Accommodation