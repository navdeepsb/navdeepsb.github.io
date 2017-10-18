import React from "react";

import OneParentForThemAll from "../../common/one-parent.jsx";
import ArticleTpl from "../../templates/article/main.jsx";

import "./style.scss";


import articles from "./data.json";
import NAV_LINKS from "../../common/web-links.json";



export default class Article extends OneParentForThemAll {
    render() {
        let articleData = articles.find( article => article.path.split( "/" )[ 1 ] === this.props.routeParams.articleName );

        return (
            <ArticleTpl data={ articleData } />
        );
    }
}