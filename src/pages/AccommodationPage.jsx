import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import data from "../datas/logements.json"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SlideShow from "../components/SlideShow"
import Rate from "../components/Rate"
import Collapse from "../components/Collapse"

function Accommodation() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [dataLogement, setdataLogement] = useState()

    useEffect(() => {
        async function getData() {
            const dataLogement = data.find(logement => logement.id === id);
            setdataLogement(dataLogement)
            if (dataLogement === undefined) {
                navigate ("/notFound", { replace: true });
            }
        }
        getData();
    }, [id, navigate])

    if (!dataLogement) return null

    return (
        <div>
            <div className="main-container">
                <Header/>
                <div className="accommodation">
                    <SlideShow slides={dataLogement.pictures}/>
                        <div className="fiche">
                            <section className="fiche__section">
                                <div className="fiche__section__top">
                                    <div className="titlesAndTags">
                                        <div className="titlesAndTags__titles">
                                            <h1>{dataLogement.title}</h1>
                                            <h2>{dataLogement.location}</h2>
                                        </div>
                                    <div className="titlesAndTags__tags">
                                        {dataLogement.tags.map((tag, i) => (
                                            <span key={i} className="titlesAndTags__tags__button">{tag}</span>
                                        ))}
                                    </div>
                                </div>         
                                <div className="HostAndRating">
                                    <div className="HostAndRating__host">
                                        <p>{dataLogement.host.name}</p>
                                        <img src={dataLogement.host.picture} alt="Photo du propriétaire"></img>
                                    </div>
                                    <div className="HostAndRating__rating">
                                        <Rate score={dataLogement.rating} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="fiche__section">
                            <div className="fiche__section__bottom">
                                <div className="fiche__section__bottom__collapse fiche__section__bottom__collapse__description">
                                    <Collapse 
                                        title="Description"
                                        description={dataLogement.description}
                                    />
                                </div>
                                <div className="fiche__section__bottom__collapse">
                                    <Collapse
                                        title="Equipements"
                                        description={
                                            dataLogement.equipments.map((equipements, i) => (
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
    )
}

export default Accommodation