import React from "react";

import ArticleThumbnail from "../../templates/article-thumbnail/main.jsx";

import "./style.scss";


import articles from "./data.json";


export default class CreativeWriting extends React.Component {
    render() {
        return (
            <div className="articles">
            { articles.filter( article => article.show ).map( ( article, idx ) => {
                return <ArticleThumbnail key={ idx } data={ article } />;
            }) }
            </div>
        );
    }
}