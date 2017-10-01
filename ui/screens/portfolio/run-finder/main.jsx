import React from "react";

import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";

import "../style.scss";

export default class RunFinder extends React.Component {
    render() {
        let bannerData = {
            projName: "Run Finder",
            roles: "UX Researcher, Interaction Designer",
            duration: "Sep-Dec 2016",
            imgSrc: require( "./run-finder-banner.jpg" ),
            imgCredit: {
                author: "Curtis MacNewton",
                link: "https://unsplash.com/@curtismacnewton"
            },
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>Problem Statement</h4>
                    <p>
                        <em>To make running an informed experience for novice runners.</em>
                        <br /><br />
                        There are numerous people around the globe who take up running as an activity to remain fit and healthy. It’s majorly a solo exercise because of varying personal preferences and one can do it anytime and anywhere. But there are beginners and people who relocate who constitute the community that I targeted. A person who has just begun running or relocated to a new place is all on their own without any proper guidance and motivation. They require relevant information such as the best places to run, running plans to follow, etc. Through this app, I wanted to eliminate the decision-making involved in wayfinding during a run so the user can have a seamless running experience.
                    </p>
                    <br />
                    <p><a href={ require( "./run-finder-final-report.pdf" ) } target="_blank" rel="nofollow" tabIndex="-1" title="Run Finder Final Report">Final report</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href={ require( "./run-finder-final-presentation.pdf" ) } target="_blank" rel="nofollow" tabIndex="-1" title="Run Finder Final Presentation">Final presentation</a></p>
                </div>
                <div className="content-block">
                    <h4>The Process</h4>
                    <p>
                        The inner sound of the developer side of mine resounded "An app!" and I immediately started thinking of features of the app. But during the course of this project, I learned that technical intervention might not always be the correct solution. So I started researching. Even though the end product was an app, I came up with other ways to curb this problem.
                    </p>
                    <h4 className="subtitle">Competitive analysis</h4>
                    <p>
                        Running is a pretty popular exercise, needless to say there were a good number of competitive apps on the market. I analyzed some of them and devised a buglist which is as follows:
                    </p>
                    <ol>
                        <li>Absence of a running store for shoes, headbands, etc.</li>
                        <li>Absence of popular running routes along with their ratings and comments</li>
                        <li>Inability of a reward system to act like a motivator for users to run</li>
                        <li>No weather alerts</li>
                        <li>No textual description of particular sections of routes that may be unsafe or have a rough terrain, etc.</li>
                        <li>Lack of running music suggestions</li>
                        <li>No information about parks in the vicinity</li>
                        <li>Lack of running events and marathon notifications</li>
                        <li>No way of customizing the app’s appearance for a more personal experience</li>
                        <li>No feature where one can see fellow runners on the same route</li>
                        <li>Absence of an SOS feature</li>
                    </ol>
                    <h4 className="subtitle">Sketching</h4>
                    <p>I found sketching as a very flexible way to start thinking about solutions. I came up with eight possible approaches of solving this problem. I used this sketch in my user interviews to observe each interviewee's reaction to these solutions.</p>
                    <img src={ require( "./sketching-solutions.jpg" ) } alt="Eight possible solutions sketched" />
                    <p>Fig. 1 - Sketch of eight possible solutions</p>
                    <img src={ require( "./storyboarding-1.jpg" ) } alt="Storyboarding of first 4 possible solutions" />
                    <img src={ require( "./storyboarding-2.jpg" ) } alt="Storyboarding of next 4 possible solutions" />
                    <p>Fig. 2 - Storyboarding for possible solutions</p>
                    <h4 className="subtitle">Personas</h4>
                    <p>As I was trying to evaluate which solution was best suited, I devised three personas and even one anti-persona.</p>
                    <img src={ require( "./pro-persona-1.jpg" ) } alt="Persona no. 1" />
                    <img src={ require( "./pro-persona-2.jpg" ) } alt="Persona no. 2" />
                    <img src={ require( "./pro-persona-3.jpg" ) } alt="Persona no. 3" />
                    <p>Fig. 3 - Personas</p>
                    <img src={ require( "./anti-persona-1.jpg" ) } alt="Anti-persona" />
                    <p>Fig. 4 - Anti-persona</p>
                    <h4 className="subtitle">User Interviews</h4>
                    <p>Next, I found five users from my target audience and interviewed them. Below are snippets from my interviews.</p>
                    <div className="snippet">
                        <p>
                            <strong>Ques.)</strong> According to you, how valuable is it to prepare for a run? <br />
                            <strong>Responses:</strong><br />
                            “Oh yeah! You can’t just make up your mind and go running, you have to set a target, you have to stretch, you have to take care of the water intake... Miss one thing and you won’t last long out there... Hahaha (laughs)...”
                            <br />
                            <br />
                            “I think it is super-valuable! Last time, I went for a run and had to return home walking because I got exhausted too soon... A friend of mine later asked me if I ran too fast in the beginning which I did. She also told me to go slow in the starting few runs to build up my stamina.”
                            <br />
                            <br />
                            “Believe me, it is!”
                            <br />
                            <br />
                            <br />
                            <strong>Ques.)</strong> What do you think about knowing where to run? <br />
                            <strong>Responses:</strong><br />
                            “Having a predetermined track would certainly reduce the load off of my mind. I mean, I won’t have to decide where to go next.”
                            <br />
                            <br />
                            “I like exploring so not knowing where to run is not much of a big deal to me.”
                            <br />
                            <br />
                            “Yeah! Definitely. I can then go there whenever I feel like running and even do two or more circuits if I feel motivated enough.”
                            <br />
                            <br />
                            “I know my way around here. Unless I get bored with running in the same track, I don’t think it will be usable to me.”
                            <br />
                            <br />
                            <br />
                            <strong>Ques.)</strong> What are your views on safety for running alone? Not just in Ann Arbor but other places too. <br />
                            <strong>Responses:</strong><br />
                            “I am absolutely concerned about safety. Especially during nights... Once, I was using Google Maps for getting back home and it took me through a very secluded area which didn’t even had a proper road. There were these overgrown trees... It was really scary.”
                            <br />
                            <br />
                            “It (safety) is important because you never know what’s gonna happen. But in my case, not so much because I always run in a park (Burns Park) close to my home and during peak times when it is usually crowded.”
                        </p>
                    </div>
                    <p>Then I showed them the sketches of the eight ideas I had drawn earlier on paper and observed their reactions. I answered their questions that they had regarding the sketches but didn’t give any specifics.</p>
                    <h4 className="subtitle">Brainstorming</h4>
                    <p>Then I picked up the "favorite" solutions and pitted them against each other. I decided at this time that an app can reach more audience and it can be sustainable too. I brainstormed on it's features.</p>
                    <img src={ require( "./brainstorm.jpg" ) } alt="Brainstorm session" />
                    <p>Fig. 5 - Brainstorm session outcome</p>
                    <h4 className="subtitle">Usability Study and Feedback</h4>
                    <p>Finally, I made a lo-fi prototype and tested it on one of the users of my target audience. The paper prototype proved very helpful as it could be made quickly, discarded easily and changed according to the feedback. Below is the video of me demonstrating the lo-fi prototype.</p>
                    <div className="fluid-media">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/shU4mAXRXrE" frameBorder="0" rel="nofollow" allowFullScreen></iframe>
                    </div>
                    <h4 className="subtitle">Hi-fi prototyping</h4>
                    <iframe width="428" height="866" src="http://invis.io/879OLVPBQ" frameBorder="0" rel="nofollow" allowFullScreen style={{ border: "0" }}></iframe>
                </div>
                <div className="content-block">
                    <h4>Key Takeaways</h4>
                    <ul>
                        <li>“The User Is Not Like Me”</li>
                        <li>An idea must be researched before implementation.</li>
                        <li>Just because you can, you shouldn’t!</li>
                        <li>Feedback and iteration are crucial to design.</li>
                        <li>Sketching and lo-fi prototyping are a fast way to gain initial feedback.</li>
                        <li>Aim for “useful, usable and desirable”.</li>
                    </ul>
                </div>
            </div>
        );
    }
}