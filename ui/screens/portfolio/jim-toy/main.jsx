import React from "react";

import "../style.scss"

import OneParentForThemAll from "../../../common/one-parent.jsx";
import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";



export default class JimToy extends OneParentForThemAll {
    render() {
        let bannerData = {
            projName: "Jim Toy Community Center",
            roles: "Site Lead, Volunteer, Digital Cataloguer, Front-End Developer",
            duration: "Nov 2017"
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>Problem Statement</h4>
                    <p>todo</p>
                </div>
           </div>
        );
    }
}