import React from "react";

import AtelierThumbnail from "../../templates/atelier-thumbnail/main.jsx";


import "./style.scss";



// Get all `data.json`s from each subdirectory
let atelierPieces = require.context( "../atelier", true, /^.*\.json$/ ).keys().map( individualPiece => {
    let pieceData = require( individualPiece );
    // Extract the image path location from this information:
    pieceData.contentImgPath = individualPiece.substr( "./".length, individualPiece.indexOf( "/", 2 ) - 1 );
    return pieceData;
});



export default class Atelier extends React.Component {
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