import React from "react";

import ArticleTpl from "../../templates/article/main.jsx";

import "./style.scss";


import articles from "./data.json";


const capitalize = ( string ) => {
    return string
        .replace( /-/g, " " )
        .toUpperCase()
}

export default class Article extends React.Component {
    render() {
        let capitalizedArticleName = capitalize( this.props.routeParams.articleName );
        let articleData = articles.find( article => article.title.toUpperCase() === capitalizedArticleName );

        return (
            <ArticleTpl data={ articleData } />
        );
    }
}



// const Article = ({ params: { articleName } }) => {
//     return (
//         <p>This is the article '{ articleName }'.</p>
//     )
// }
