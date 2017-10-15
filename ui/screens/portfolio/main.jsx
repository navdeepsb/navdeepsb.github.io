import React from "react";

import "./style.scss";

import projects from "./data.json";
import NAV_LINKS from "../../common/web-links.json";

import ProjectThumbnail from "../../templates/proj-thumbnail/main.jsx";



export default class Portfolio extends React.Component {
    componentDidMount() {
        // Activate the link in the nav bar:
        document.querySelector( `nav a[href='#${ NAV_LINKS.HOME }']` ).classList.add( "active" );
    }

    componentDidUnmount() {
        // Activate the link in the nav bar:
        document.querySelector( `nav a[href='#${ NAV_LINKS.HOME }']` ).classList.remove( "active" );
    }

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