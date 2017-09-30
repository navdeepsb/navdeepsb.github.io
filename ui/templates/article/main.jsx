import React from "react";

import "./style.scss";


export default class ArticleTpl extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <div className="article">
                <h3>{ data.title }</h3>
                <p className="timestamp">{ data.timestamp }</p>
                <p className="content" dangerouslySetInnerHTML={{ __html: data.content }}></p>
            </div>
        );
    }
}