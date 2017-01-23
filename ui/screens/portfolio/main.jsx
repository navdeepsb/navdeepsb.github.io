import React from "react";

import ProjectThumbnail from "../../templates/proj-thumbnail/main.jsx";

import "./style.scss";


import projects from "./data.json";


export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="portfolio">
                { projects.filter( proj => proj.show ).map( ( proj, idx ) => {
                    if( proj.img ) {
                        proj.imgSrc = require( `./${ proj.img }` );
                    }

                    return <ProjectThumbnail key={ idx } data={ proj } />;
                }) }
                <p className="meta">This website is designed and developed by me.</p>
                <p><a href="https://github.com/navdeepsb/navdeepsb.github.io" target="_blank" rel="nofollow" tabIndex="-1" title="Source Code of Portfolio">Source Code</a></p>
            </div>
        );
    }
}