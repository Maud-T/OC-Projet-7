import bannerImg from "../assets/Banner.png"
import Banner from "../components/Banner"
import Gallery from "../components/Gallery"

function Home() {
    return (
        <div className="home-container">
                <Banner texte="Chez vous, partout et ailleurs" image={bannerImg} />
                <Gallery />
        </div>
    )
}

export default Home