import "./style.scss";

import React from "react";
import { Link } from "react-router";



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
            <Link to={ data.path } className="proj-thumbnail" title={ data.title }>
                { thumbnail }
                <h3>{ data.title }</h3>
                <p>{ data.subtitle }</p>
            </Link>
        );
    }
}