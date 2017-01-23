import React from "react";

import "./style.scss";

import articles from "../../screens/creative-writing/data.json";


const capitalize = ( string ) => {
    return string
        .replace( /-/g, " " )
        .toUpperCase()
}

export default class Article extends React.Component {
    render() {
        let capitalizedArticlaName = capitalize( this.props.routeParams.articleName );
        let articleData = articles.find( article => article.title.toUpperCase() === capitalizedArticlaName );

        return (
            <div className="article">
                <h3>{ articleData.title }</h3>
                <p className="timestamp">{ articleData.timestamp }</p>
                <p className="content" dangerouslySetInnerHTML={{ __html: articleData.content }}></p>
            </div>
        );
    }
}



// const Article = ({ params: { articleName } }) => {
//     return (
//         <p>This is the article '{ articleName }'.</p>
//     )
// }
