import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/HomePage.jsx"
import Accommodation from "../pages/AccommodationPage.jsx"
import About from "../pages/AboutPage.jsx"
import NotFound from "../pages/NotFoundPage.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accommodation/:id" element={<Accommodation />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router