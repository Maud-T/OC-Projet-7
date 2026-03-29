//import React, { useState } from 'react';
import bannerImg from "../assets/BannerAbout.png"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse.jsx"
import aboutItems from "../datas/aboutItems.json"

function About() {
    return (
        <div className="about">
            <Banner image={bannerImg} />
            <div className="about__collapses">
                <div className="about__collapses__collapse">
                    {aboutItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <Collapse title={item.title} description={item.description} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default About