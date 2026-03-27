import bannerImg from "../assets/BannerAbout.png"
import Banner from "../components/Banner"

function About() {
    return (
        <div className="about-container">
            <Banner image={bannerImg} />
            <h1>Page À Propos</h1>
        </div>
    )
}

export default About