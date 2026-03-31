import bannerImg from "../assets/BannerHome.png"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Gallery from "../components/Gallery"

function Home() {
    return (
        <div>
            <div className="main-container">
                <Header/>
                <div className="home">
                    <Banner className="banner" texte="Chez vous, partout et ailleurs" image={bannerImg} />
                    <Gallery />
                </div>
            </div>
        <Footer/>
    </div>)
}

export default Home