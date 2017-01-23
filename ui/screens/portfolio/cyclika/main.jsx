import React from "react";

import "../style.scss"

export default class ConsultantDTE extends React.Component {
    render() {
        return (
            <div className="project">
                <div className="banner img-wrapper">
                    <img src={ require( "./cyclika-banner.jpg" ) } alt="Cyclika banner" />
                    <div className="banner__overlay">
                        <div className="banner__text-container">
                            <h3>Cyclika</h3>
                            <p>Role: UX Researcher | Oct 2016 - Jan 2017</p>
                        </div>
                    </div>
                </div>
                <div className="content-block">
                    <h4>Highlights</h4>
                    <ul>
                        <li>Runners-up of Munger Case Competition 2016</li>
                        <li>Submitted in CHI 2017 Student Design Competition</li>
                    </ul>
                </div>
                <div className="content-block">
                    <h4>About</h4>
                    <p>I collaborated with four other UMSI students to come up with a feasible and affordable solution to make biking a safe experience by making the rider aware of the vehicles/obstacles approaching from behind. We initially started by targeting hearing-impaired users but deep down into research, we realized that our solution was inclusive in nature and could encompass all the users regardless of hearing-impairment, situational or otherwise.</p>
                    <p style={{ display: "none" }}>We proposed a prototype that could be mounted on the handlebars of a bike that consisted of LEDs that light up according to the proximity of the obstacle behind which would be detected by RADAR technology. We also provided turn signals to let the drivers know of the rider's presence.</p>
                </div>
                <div className="content-block">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6f8aYG8bT3M" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="content-block">
                    <p><a href={ require( "./final-paper.pdf" ) } target="_blank" rel="nofollow" tabIndex="-1" title="Cyclika Final Paper">Final paper</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href={ require( "./final-poster.pdf" ) } target="_blank" rel="nofollow" tabIndex="-1" title="Cyclika Final Poster">Final poster</a></p>
                </div>
            </div>
        );
    }
}