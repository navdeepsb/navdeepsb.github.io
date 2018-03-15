import React from "react";

import "../style.scss"

import OneParentForThemAll from "../../../common/one-parent.jsx";
import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";



export default class EndpointsRADuo extends OneParentForThemAll {
    render() {
        let bannerData = {
            projName: "Endpoints Reporting & Analysis @ Duo",
            roles: "Product Designer",
            duration: "May 2017"
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>Background</h4>
                    <p>This project was part of my <strong>summer internship at Duo Security, Inc.</strong> in Ann Arbor. I was tasked to conduct a background research on one of the upcoming data visualization consoles of Duo's enterprise administration console.</p>
                    <h4>About Duo Security</h4>
                    <br />
                    <p>Duo is a leading 2fa solution for many enterprises and tech giants of the silicon valley such as .... &lt;website&gt;</p>
                    <p>Since I have signed an <strong>NDA</strong> with Duo, I will only be sharing a few details about the project.</p>
                </div>
                <div className="content-block">
                    <h4>Problem Statement</h4>
                    <p>To help an admin understand his """device environment""" better by showing trends & growth of certain """endpoint""" attributes so he can quickly identify any security threats and be able to convey this information to Helen, her CISO.</p>
                </div>
           </div>
        );
    }
}