import "./style.scss";

import React from "react";
import { Link } from "react-router";


export default class ArticleThumbnail extends React.Component {
    render() {
        let data = this.props.data;
        let preview = data.content.substr( 0, 200 );

        return (
            <div className="article-thumbnail">
                <h3>{ data.title }</h3>
                <p className="timestamp">{ data.timestamp }</p>
                <p dangerouslySetInnerHTML={{ __html: preview + "..." }} />
                <Link to={ data.path } title={ data.title }>Continue reading</Link>
            </div>
        );
    }
}