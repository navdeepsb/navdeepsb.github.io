import React from "react";

import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";

import "../style.scss"


export default class Expedia extends React.Component {
    render() {
        let bannerData = {
            projName: "Expedia",
            roles: "UX Researcher",
            duration: "Jan-Apr 2017",
            imgSrc: require( "./steve-halama-aeroplane.jpg" ),
            imgCredit: {
                author: "Steve Halama",
                link: "https://unsplash.com/@steve3p_0"
            }

        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>About</h4>
                     <p>This project is part of my academic Winter '17 term at U-M when I was enrolled in SI 622 (Needs Assessment & Usability Evaluation). This project involved a team of students coordinating with a real-world client and evaluating one of their products in terms of usability. Our team comprised of <a href="https://www.linkedin.com/in/gaurangalat" rel="nofollow" target="_blank" tabIndex="-1" title="Gaurang's LinkedIn">Gaurang Alat</a>, <a href="https://www.linkedin.com/in/sanmeetiit" rel="nofollow" target="_blank" tabIndex="-1" title="Sanmeet's LinkedIn">Sanmeet Jasuja</a>, Megan Kipp, <a href="https://www.linkedin.com/in/kehanliao" rel="nofollow" target="_blank" tabIndex="-1" title="Kehan's LinkedIn">Kehan Liao</a> and myself (<strong>"Team Odyssey"</strong>), all U-M School of Information students with an interest in HCI. Our client was Expedia and we were asked to evaluate the usability of their iOS app.</p>
                    <h4 className="subtitle">Project scope</h4>
                     <p>With the primary purpose of this <strong>iOS app v8.4</strong> being booking tickets and reserving hotels, we decided to focus on the relatively new <strong>Bundles feature</strong> which combines flight and hotel booking in the same workflow, saving the user time and a few bucks. Our final deliverable was decided to be a <strong>&lt; 10 min video</strong> summarizing all the findings:</p>
                    <figure>
                        <div className="fluid-media">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Y24xAXjlPj4?rel=0" frameborder="0" rel="nofollow" allowfullscreen></iframe>
                        </div>
                        <figcaption>Final deliverable summarizing all the findings</figcaption>
                    </figure>
               </div>
               <div className="content-block">
                    <h4>The Process</h4>
                    <p>We followed the following phases</p>
                    <ol>
                        <li>Interaction Map</li>
                        <li>User Interviews</li>
                        <li>Comparative Evaluation</li>
                        <li>Surveys</li>
                        <li>Heuristic Evaluation</li>
                        <li>Usability Test</li>
                        <li>Final video</li>
                    </ol>
                    <br />
                    <h4 className="subtitle">Interaction Map</h4>
                    <p>We developed an interaction map for the Bundles workflow to understand it better and identify high-level issues and things that work really well.</p>
                    <figure>
                        <img src={ require( "./interaction-map-sketch.jpg" ) } alt="A sketch of the interaction map" className="no-border" />
                        <figcaption>Fig. 1 - Sketch of interaction map of Expedia iOS app's Bundles workflow</figcaption>
                    </figure>
                    <br />
                    <h4 className="subtitle">User Interviews</h4>
                    <p>We interviewed 5 users.</p>
                    <figure>
                        <img src={ require( "./interaction-map-sketch.jpg" ) } alt="A sketch of the interaction map" className="no-border" />
                        <figcaption>Fig. 1 - Sketch of interaction map of Expedia iOS app's Bundles workflow</figcaption>
                    </figure>
               </div>
               <div className="content-block">
                    <h4>Impact</h4>
                    <p>Lorem ipsum</p>
               </div>
           </div>
        );
    }
}