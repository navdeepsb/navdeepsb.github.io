import React from "react";

import ArticleTpl from "../../templates/article/main.jsx";

import "./style.scss";


import articles from "./data.json";
import NAV_LINKS from "../../common/web-links.json";



export default class Article extends React.Component {
    componentDidMount() {
        // Activate the link in the nav bar:
        // ---
        // Step #1 - Match the nav links with the current link and find the active one
        this.activeLink = Object.values( NAV_LINKS )
            .filter( link => {
                return link.length > 1 && window.location.href.indexOf( link ) > -1;
            });

        // Step #2 - Use that link attr to select the `a` tag and add class `active` to it
        document.querySelector( `nav a[href='#${ this.activeLink[ 0 ] }']` ).classList.add( "active" );
    }

    componentWillUnmount() {
        // Step #3 - Deactivate the link
        document.querySelector( `nav a[href='#${ this.activeLink[ 0 ] }']` ).classList.remove( "active" );
    }

    render() {
        let articleData = articles.find( article => article.path.split( "/" )[ 1 ] === this.props.routeParams.articleName );

        return (
            <ArticleTpl data={ articleData } />
        );
    }
}