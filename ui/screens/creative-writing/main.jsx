import React from "react";

import "./style.scss";

import articles from "./data.json";
import NAV_LINKS from "../../common/web-links.json";

import ArticleThumbnail from "../../templates/article-thumbnail/main.jsx";



export default class CreativeWriting extends React.Component {
    componentDidMount() {
        // Activate the link in the nav bar:
        document.querySelector( `nav a[href='#${ NAV_LINKS.CREATIVE_WRITING }']` ).classList.add( "active" );
    }

    componentDidUnmount() {
        // Activate the link in the nav bar:
        document.querySelector( `nav a[href='#${ NAV_LINKS.CREATIVE_WRITING }']` ).classList.remove( "active" );
    }

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