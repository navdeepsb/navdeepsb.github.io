import React from "react";

import "./style.scss";

import NAV_LINKS from "../../common/web-links.json";

import AtelierThumbnail from "../../templates/atelier-thumbnail/main.jsx";



// Get all `data.json`s from each subdirectory
let atelierPieces = require.context( "../atelier", true, /^.*\.json$/ ).keys().map( individualPiece => {
    let pieceData = require( individualPiece );
    // Extract the image path location from this information:
    pieceData.contentImgPath = individualPiece.substr( "./".length, individualPiece.indexOf( "/", 2 ) - 1 );
    return pieceData;
});



export default class Atelier extends React.Component {
    componentDidMount() {
        // Activate the link in the nav bar:
        document.querySelector( `nav a[href='#${ NAV_LINKS.GRAPHIC_DESIGN }']` ).classList.add( "active" );
    }

    componentDidUnmount() {
        // Activate the link in the nav bar:
        document.querySelector( `nav a[href='#${ NAV_LINKS.GRAPHIC_DESIGN }']` ).classList.remove( "active" );
    }

    render() {
        return (
            <div className="atelier">
            { atelierPieces.filter( piece => !piece.isNotReady ).map( ( piece, idx ) => {
                if( piece.thumbnailImg ) {
                    piece.thumbnailImg = require( `./${ piece.contentImgPath + piece.thumbnailImg.split( "/" ).reverse()[ 0 ] }` );
                }

                return <AtelierThumbnail key={ idx } data={ piece } />;
            }) }
            </div>
        );
    }
}