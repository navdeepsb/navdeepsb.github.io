import "./style.scss";

import React from "react";
import { Link } from "react-router";


// Handy-dandy variables:
const TOOLS_I_USED = [{
    "ilstrtr": "Adobe Illustrator",
    "fotoshp": "Adobe Photoshop",
    "powrpnt": "Microsoft Powerpoint"
}];


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
        let thumbnail = null;
        let timestamp = data.timestamp ? <p className="date">{ data.timestamp }</p> : null;

        if( data.thumbnailImg ) {
            thumbnail = <div className="canvas img-wrapper">
                            <img src={ data.thumbnailImg } alt={ "Thumbnail nail for " + data.title } />
                        </div>;
        }
        else {
            thumbnail = <div className="canvas" />
        }

        return (
            <Link to={ data.path } className="atelier-thumbnail" title={ data.title }>
                <div className="background-wrapper">
                    { thumbnail }
                    <div className="text-wrapper">
                        <h3>{ data.title }</h3>
                        <div className="piece-info">
                            <p>{ ( data.contentSections || [] ).length } images</p>
                            { timestamp }
                        </div>
                        <ToolsUsed tools={ data.tools } />
                    </div>
                </div>
            </Link>
        );
    }
}