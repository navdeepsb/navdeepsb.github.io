import React from "react";

import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";

import "../style.scss"

export default class ConsultantDTE extends React.Component {
    render() {
        let bannerData = {
            projName: "Consultant at DTE Energy",
            roles: "UX Researcher, Consultant",
            duration: "Sep-Dec 2016",
            imgSrc: require( "./dte-banner.jpg" )
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>Objective</h4>
                    <p>To evaluate current work practices and suggest recommendations to improve the existing workflow of Detroit-based utilites company, DTE Energy. I worked with 3 other team members to provide an outside perspective on the workflow and we worked together over the course of 4 months researching and analysing the client needs through user-centered design techniques such as contextual inquiry and making an affinity wall.</p>
                    <p>The final report as well as the artefacts for each of the steps of the process followed are available on request and not published here due to an <strong>NDA agreement</strong>. Please contact me at navdeepb@umich.edu and I will be happy to share them with you.</p>
                </div>
                <div className="content-block">
                    <h4>The Process</h4>
                    <ul>
                        <li>Background research</li>
                        <li>Initial client contact</li>
                        <li>Interview protocols for contextual inquiries</li>
                        <li>Actual contextual inquiries</li>
                        <li>Affinity wall to find the root problems</li>
                        <li>Final presentation containing recommendations</li>
                    </ul>
                    <p>After having a brief overview of the problem, I perused a plethora of research papers to form a solid base for the qualitative research to be performed ahead in the form of a report. This report consisted of important points that proved very useful to know the client better and prepare even better for future tasks.</p>
                    <p>I participated in 4 out of the 6 contextual inquires where I played the role of the primary interviewer. I used open-ended questions to understand the thought process of the interviewee to get the best insights into how and why they interacted with technology. I followed-up where ever I needed clarification and asked for recent examples where the interviewee faced problems and how they felt about it. I probed when I thought I could not get enough information but also followed the practice of observing quietly when needed. For one contextual inquiry, I prepared the interview protocol pertaining to a job role different than the actual one but was still able to conduct a smooth interview by forming meaningful and insightful questions on the fly and was still able to extract key findings.</p>
                    <p>The affinity wall was a fun exercise where we got to look at the findings from all the contextual inquires from a bird's eye view. It took time but the end result was very convincing and satisfying. The team agreed upon the higher-level problems and we were also able to find problems that were not explicitly mentioned intially by the client. We worked around those problems and discovered sound recommendations through this activity.</p>
                </div>
                <div className="content-block">
                    <h4>Impact</h4>
                    <p>In the end, our recommendations were greatly appreciated by our client as they looked forward to implementing them. The final presentation at the client's office was a success and the entire journey proved very helpful in providing an insight into evaluating user needs, finding problems and then fixing them.</p>
                </div>
            </div>
        );
    }
}