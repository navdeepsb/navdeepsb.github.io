import React from "react";

import AtelierTpl from "../../templates/atelier/main.jsx";

import NAV_LINKS from "../../common/web-links.json";


// Get all `data.json`s from each subdirectory
let atelierPieces = require.context( "../atelier", true, /^.*\.json$/ ).keys().map( individualPiece => {
    let pieceData = require( individualPiece );
    // Extract the image path location from this information:
    pieceData.contentImgPath = individualPiece.substr( "./".length, individualPiece.indexOf( "/", 2 ) - 1 );
    return pieceData;
});



export default class AtelierPiece extends React.Component {
    componentDidMount() {
        // Activate the link in the nav bar:
        // ---
        // Step #1 - Match the nav links with the current link and find the active one
        this.activeLink = Object.values( NAV_LINKS )
            .filter( link => {
                return link.length > 1 && window.location.href.indexOf( link ) > -1;
            });

        // Step #2 - Use that link attr to select the `a` tag and add class `active` to it
        document.querySelector( `nav a[href='#${ this.activeLink[ 0 ] }']` ).classList.add( "active" );
    }

    componentWillUnmount() {
        // Step #3 - Deactivate the link
        document.querySelector( `nav a[href='#${ this.activeLink[ 0 ] }']` ).classList.remove( "active" );
    }

    render() {
        let atelierData = atelierPieces.find( atelier => atelier.path.split( "/" )[ 1 ] === this.props.routeParams.piece );

        // Also cure content section image paths:
        atelierData.contentSections.map( sec => {
            if( !sec.img ) return null;
            sec.img = require( `./${ atelierData.contentImgPath + sec.img.split( "/" ).reverse()[ 0 ] }` );
            // ^ The `split()` thing is to get rid of "public/" in the image path. Reverse allowes me to
            //   make a more general function. Examples:
            //     #1:
            //     let a = "public/a.png".split( "/" ) = [ "public", "a.png" ]
            //     let b = a.reverse()                 = [ "a.png", "public " ]
            //         b[ 0 ]                          = "a.png"    <----
            //     #2:
            //     let a = "a.png".split( "/" )        = [ "a.png" ]
            //     let b = a.reverse()                 = [ "a.png" ]
            //         b[ 0 ]                          = "a.png"    <----
            return sec;
        } );

        return (
            <AtelierTpl data={ atelierData } />
        );
    }
}