import React from "react";

import NAV_LINKS from "./web-links.json";


export default class OneParentForThemAll extends React.Component {
    componentDidMount() {
        // Activate the link in the nav bar:
        // ---
        // Step #1 - Match the nav links with the current link and find the active one
        this.activeLink = Object.values( NAV_LINKS )
            .filter( link => {
                return link.length > 1 && window.location.href.indexOf( link ) > -1;
            });

        // Step #2 - Use that link attr to select the `a` tag and add class `active` to it
        if( this.activeLink[ 0 ] === NAV_LINKS.PORTFOLIO ) this.activeLink[ 0 ] = "/";
        document.querySelector( `nav a[href='#${ this.activeLink[ 0 ] }']` ).classList.add( "active" );
    }

    componentWillUnmount() {
        // Step #3 - Deactivate the link
        document.querySelector( `nav a[href='#${ this.activeLink[ 0 ] }']` ).classList.remove( "active" );
    }
}