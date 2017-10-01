import React from "react";

import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";

import "../style.scss"

export default class Audiovate extends React.Component {
    render() {
        let bannerData = {
            projName: "Audiovate",
            roles: "UX Researcher, PM, Consultant",
            duration: "Jan-Apr 2017",
            imgSrc: require( "./nourdine-diouane-running.jpg" ),
            imgCredit: {
                author: "Nourdine Diouane",
                link: "https://unsplash.com/@nourdine"
            },
            noOverlayOnImgWanted: true
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>About</h4>
                    <h4 className="subtitle">What is Audiovate?</h4>
                    <p>Audiovate is a technology which varies the volume, speed and pitch of music as feedback to participants in sports. Applications for the technology include boxing, running and cycling to name a few.</p>
                    <br />
                    <h4 className="subtitle">Brief Overview</h4>
                    <p>This project is part of my academic Winter term at U-M when I was enrolled in ENTR 599 (Project Management & Consulting) under U-M's <a href="http://cfe.umich.edu/courses/" rel="nofollow" target="_blank" tabIndex="-1" title="U-M's Center of Entrepreneurship courses">Center of Entrepreneurship</a>. A major component of this course is to connect a group of students with a real-world client who are in need of market research of their product which is usually in a preliminary (pre-launch) state. The students work on their own pace with the client learning and applying project management and consulting concepts along the way. Our team, comprising of  <a href="https://www.linkedin.com/in/jenniferymware" rel="nofollow" target="_blank" tabIndex="-1" title="Jennifer's LinkedIn">Jennifer Ware</a>, <a href="https://www.linkedin.com/in/liuyuc" rel="nofollow" target="_blank" tabIndex="-1" title="Yu's LinkedIn">Yu Liu</a>, <a href="https://www.linkedin.com/in/shubhum-sidhar-59503511b" rel="nofollow" target="_blank" tabIndex="-1" title="Shubh's LinkedIn">Shubhum Sidhar</a>, <a href="https://www.linkedin.com/in/diyuxiao" rel="nofollow" target="_blank" tabIndex="-1" title="Diyu's LinkedIn">Diyu Xiao</a> and myself (<strong>"Wolverine Consultants"</strong>), were tied with Audiovate, which was a commercial product stemming out of a research project at the Western Michigan University, Kalamazoo, MI.</p>
                    <p>The final deliverables include a presentation and final report consisting of our recommendations for the client and a class presentation. If you are interested in viewing these, please shoot me an email at navdeepb@umich.edu</p>
                    <br />
                    <figure>
                        <img src={ require( "./audiovate-scope-overview.png" ) } alt="High-level scope overview" className="no-border" />
                        <figcaption>Fig. 1 - High-level scope overview for the project</figcaption>
                    </figure>
                </div>
                <div className="content-block">
                    <h4>Client Testimonial</h4>
                    <div className="snippet">
                        <p>"The Wolverine team conducted an in-depth analysis of the various applications for the technology, made an analysis of the technology’s value proposition vs. competitors and presented GoForward recommendations to Audiovate––which market/customer segments to target (and those to ignore), the value proposition to emphasize for targeted segments and features to add for different segments as examples.</p>
                        <p>We the Audiovate team learned much from their work, with some of their effort confirming our suspicions with hard numbers and analysis which we lacked––and needed for our future planning.  We are pleased with their work and are highly thankful for their contributions to our work."</p>
                        <p><a href="https://www.linkedin.com/in/thomasnastas/" rel="nofollow" target="_blank" tabIndex="-1" title="Thomas Nastas">Thomas Nastas</a></p>
                    </div>
                </div>
                <div className="content-block">
                    <h4>The Process</h4>
                    <p>We followed the following key principles of effective consulting throughout our process with the client:</p>
                    <ol>
                        <li className="padded-list-item">
                            <em>Sell</em>
                            <br />
                            High level overview of marketing, selling, sales strategies and the importance of business development.
                        </li>
                        <li className="padded-list-item">
                            <em>Engage</em>
                            <br />
                            Why engaging with the client and team is important, and how to do it effectively.
                        </li>
                        <li className="padded-list-item">
                            <em>Scope</em>
                            <br />
                            Discussion of scope, scope creep, and why it is critical to the project.
                        </li>
                        <li className="padded-list-item">
                            <em>Plan</em>
                            <br />
                            Discussion of key planning topics, including budget, time and resources.
                        </li>
                        <li className="padded-list-item">
                            <em>Research</em>
                            <br />
                            Review of different research strategies and effectiveness under different scenarios.
                        </li>
                        <li className="padded-list-item">
                            <em>Innovate</em>
                            <br />
                            Discussion on how to innovate and how to distinguish yourselves from the rest of the market.
                        </li>
                        <li className="padded-list-item">
                            <em>Decide</em>
                            <br />
                            Methodologies and use of models to help structure the decision making process.
                        </li>
                        <li className="padded-list-item">
                            <em>Manage</em>
                            <br />
                            The project or engagement, and addressing and mitigating risk.
                        </li>
                        <li className="padded-list-item">
                            <em>Close</em>
                            <br />
                            How to learn from the engagement, and to celebrate success.
                        </li>
                    </ol>
                    <br />
                    <h4 className="subtitle">We UX'ed it too</h4>
                    <p>While the primary focus of this project was to practice project management and consulting skills, we decided to apply some UX principles for market research and customer discovery.</p>
                    <p>It was a coincidence that all 5 of us were teamed up with each other. This class attracts students from various schools of Michigan such as Engineering, Public Health, Social Work, Information and more. We happened to be from the same school, the School of Information, 4 of us specializing in the same field: Human-Computer Interaction and 1 in Health Informatics with a keen interest in HCI. Being native problem solvers, we spiced up this approach with the UX methodology. We opted to incoporate the UX phases of <strong>Define</strong> and <strong>Discover</strong>for carrying out this project. Our scope did not allow to accommodate the Design and Test phases.</p>
                    <br />
                    <h4 className="subtitle">Timeline</h4>
                    <p>We developed a gantt chart highlighting various project phases and were pretty successful in managing this timeline.</p>
                    <figure>
                        <img src={ require( "./gantt-chart.png" ) } alt="Gantt Chart for this project" className="no-border" />
                        <figcaption>Fig. 2 - Project timeline gantt chart</figcaption>
                    </figure>
                </div>
                <div className="content-block">
                    <h4>Define</h4>
                    <p style={{ marginBottom: 0 }}>After viewing a demo of Audiovate incoporated with boxing, we were really impressed with its applications. After intial brainstorming, we decided to focus on the following activities to discover this technology's feasibility and confirm with users if this will be useful in their day-to-day lives:</p>
                    <ul style={{ marginTop: 0 }}>
                        <li>Boxing</li>
                        <li>Running</li>
                        <li>Indoor + Outdoor Cycling</li>
                        <li>Spinning</li>
                    </ul>
                </div>
                <div className="content-block">
                    <h4>Discover</h4>
                    <h4 className="subtitle">Customer Discovery</h4>
                    <p>We interviewed 14 users with varying interests in exercises/activities over 2 weeks (Fig. 3). We focussed on the following key questions:</p>
                    <ol>
                        <li>What are people’s habits in exercising (including motivations, plans, music listening behavior, etc.)?</li>
                        <li>What are people’s attitudes and preference towards Audiovate platforms?</li>
                    </ol>
                    <figure>
                        <img src={ require( "./user-interviews.png" ) } alt="Table showing various categories of users interviewed" className="no-border" />
                        <figcaption>Fig. 3 - User interviews</figcaption>
                    </figure>
                    <h4 className="subtitle">Customer Discovery Findings</h4>
                    <ol>
                        <li>Music is a popular source of motivation for exercising</li>
                        <li>Users are concerned about the logistics of listening to music</li>
                        <li>General enthusiasm among the users towards Audiovate’s technology</li>
                        <li>Most of the interviewees picture Audiovate as an app or a wearable</li>
                        <li>Audiovate is perfect for solo exercise but users also enjoy social interaction with other exercisers</li>
                    </ol>
                    <br />
                    <h4 className="subtitle">Competitive Analysis</h4>
                    <p>Then we proceeded with pitting our client against various competitors. We grouped these competitors into various categories (Fig. 4.), namely:</p>
                    <ul>
                        <li>Direct (same functionality delivered in the same way)</li>
                        <li>Indirect (same functionality in a different way)</li>
                        <li>Partial (some of the same functionality)</li>
                        <li>Analogous (different functionality but related in some way)</li>
                    </ul>
                    <br />
                    <figure>
                        <img src={ require( "./competitive-analysis.jpg" ) } alt="Competitive analysis for this project" className="no-border" />
                        <figcaption>Fig. 4 - Competitive analysis</figcaption>
                    </figure>
                    <br />
                    <h4 className="subtitle">Personas</h4>
                    <p>Using the insights from user interviews, we developed 3 personas for Audiovate (Fig. 5-7).</p>
                    <figure>
                        <img src={ require( "./persona-1.jpg" ) } alt="First persona depicting a serious exerciser" className="no-border padded" />
                        <figcaption>Fig. 5 - Persona #1 (the serious exerciser)</figcaption>
                    </figure>
                    <br />
                    <figure>
                        <img src={ require( "./persona-2.jpg" ) } alt="The second persona depicting a serious exerciser" className="no-border padded" />
                        <figcaption>Fig. 6 - Persona #2 (the novice exerciser)</figcaption>
                    </figure>
                    <br />
                    <figure>
                        <img src={ require( "./persona-3.jpg" ) } alt="Third persona depicting a casual exerciser" className="no-border padded" />
                        <figcaption>Fig. 7 - Persona #3 (the casual exerciser)</figcaption>
                    </figure>
                    <p>Our client did not expect personas as a deliverable but they were really impressed by this approach of designing for the users.</p>
                    <br />
                    <h4 className="subtitle">SWOT Analysis</h4>
                    <p>Our last step was to conduct a SWOT (strengths, weaknesses, opportunities & threats) analysis on Audiovate (Fig. 8).</p>
                    <figure>
                        <img src={ require( "./swot.jpg" ) } alt="Stengths, weaknesses, opportunities & threats analysis for Audiovate" className="no-border padded" />
                        <figcaption>Fig. 8 - SWOT analysis</figcaption>
                    </figure>
                </div>
                <div className="content-block">
                    <h4>Recommendations / Final Findings</h4>
                    <ul>
                        <li>Stand alone application accessible by smartwatch or phone with supplemental mounts/wearables would be ideal</li>
                        <li>Allow for customization to prefered exercise, budget and general preferences</li>
                        <li>Market is already saturated and competitors have products that are only compatible with specific sports</li>
                        <li>In addition, the app must have: custom music selection, heart rate tracking, speed tracking, distance tracking, GPS tracking, calendar and days exercised, rewards and/or gamification, social media integration and goal setting</li>
                    </ul>
                </div>
                <div className="content-block">
                    <figure>
                        <img src={ require( "./wolverine-consultants.jpg" ) } alt="Wolverine Consultants (from ltr): Shubhum Sidhar, me, Diyu Xiao, Yu Liu & Jennifer Ware" className="no-border" />
                        <figcaption>Wolverine Consultants (from ltr): Shubhum Sidhar, me, Diyu Xiao, Yu Liu and Jennifer Ware<br />ps Above photo taken on 03-31-17 immediately after the final client presentation. It went really well as you can tell from our faces :-)</figcaption>
                    </figure>
                </div>
           </div>
        );
    }
}