import "./style.scss";

import React from "react";
import { Link } from "react-router";

import NAV_LINKS from "../../common/web-links.json";


export default class ArticleThumbnail extends React.Component {
    render() {
        let data = this.props.data;
        let preview = data.content.substr( 0, 200 );

        return (
            <div className="article-thumbnail">
                <h3>{ data.title }</h3>
                <p className="timestamp">{ data.timestamp }</p>
                <p dangerouslySetInnerHTML={{ __html: preview + "..." }} />
                <Link to={ NAV_LINKS.CREATIVE_WRITING + data.path } title={ data.title }>Continue reading</Link>
            </div>
        );
    }
}