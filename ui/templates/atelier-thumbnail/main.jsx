import "./style.scss";

import React from "react";
import { Link } from "react-router";


// Handy-dandy variables:
const TOOLS_I_USED = [{
    "ilstrtr": "Adobe Illustrator",
    "fotoshp": "Adobe Photoshop",
    "powrpnt": "Microsoft Powerpoint"
}];
const DESC_CHARS = 80;


class ToolsUsed extends React.Component {
    render() {
        return (
            <div className="tools-imgs">
                { this.props.tools.map( toolId => {
                    return (
                        <div className="img-wrapper">
                            <img src={ require( "./" + toolId + ".png" ) } alt={ TOOLS_I_USED[ toolId ] } className="no-border" />
                        </div>
                    );
                } ) }
            </div>
        );
    }
}


export default class AtelierThumbnail extends React.Component {
    render() {
        let data = this.props.data;
        let timestamp = data.timestamp ? <p className="date">{ data.timestamp }</p> : null;
        let thumbnail = data.thumbnailImg ? <img src={ data.thumbnailImg } alt={ "Thumbnail nail for " + data.title } className="canvas" /> : <div className="canvas" />;
        let descrptn  = ( data.contentSections[ 0 ] || "" ).desc ? <p className="piece-info">{ data.contentSections[ 0 ].desc.substr( 0, DESC_CHARS ) + "..." }</p> : null;

        return (
            <div className="atelier-thumbnail">
                <Link to={ data.path } className="background-wrapper" title={ data.title }>
                    { thumbnail }
                    <div className="text-wrapper">
                        <h3>{ data.title }</h3>
                        { descrptn }
                        <div className="piece-info">
                            <p>{ ( data.contentSections || [] ).length } media</p>
                            { timestamp }
                        </div>
                        <ToolsUsed tools={ data.tools } />
                    </div>
                </Link>
            </div>
        );
    }
}