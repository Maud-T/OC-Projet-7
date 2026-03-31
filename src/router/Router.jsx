import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/HomePage"
import Accommodation from "../pages/AccommodationPage"
import About from "../pages/AboutPage"
import NotFound from "../pages/NotFoundPage"

function Router() {
    return (
        <BrowserRouter>
            <div className="body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/accommodation/:id" element={<Accommodation />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Router