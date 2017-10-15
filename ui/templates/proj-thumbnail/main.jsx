import "./style.scss";

import React from "react";
import { Link } from "react-router";

import NAV_LINKS from "../../common/web-links.json";



export default class ProjectThumbnail extends React.Component {
    render() {
        let data = this.props.data;
        let thumbnail = null;

        if( data.imgSrc ) {
            thumbnail = <div className="box img-wrapper">
                            <img src={ data.imgSrc } alt={ data.title } />
                        </div>;
        }
        else {
            thumbnail = <div className="box" />
        }

        return (
            <Link to={ NAV_LINKS.PORTFOLIO + data.path } className="proj-thumbnail" title={ data.title }>
                { thumbnail }
                <h3>{ data.title }</h3>
                <p>{ data.subtitle }</p>
            </Link>
        );
    }
}