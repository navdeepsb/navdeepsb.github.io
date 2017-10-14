import React from "react";

import "./style.scss";


export default class AtelierTpl extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <div className="atelier">
                <h3>{ data.title }</h3>
                <p className="timestamp">{ data.timestamp }</p>
                { data.contentSections.map( content => {
                    let imgClassList = "padded ";

                    if( !content.imgPadded ) {
                        imgClassList = "";
                    }

                    if( content.imgNoBorder ) {
                        imgClassList += "no-border";
                    }

                    if( content.type === "palette" ) {
                        return (
                            <div className="atelier__content">
                                <h4><strong>Color Palette</strong></h4>
                                { content.colorPalette.map( color => {
                                    return <div className="palette-block" style={{ "background": color }} />; } ) }
                            </div>
                        );
                    }

                    return (
                        <div className="atelier__content">
                            <p className="atelier__txt" dangerouslySetInnerHTML={{ __html: content.desc }} />
                            <div className="atelier-img-wrapper">
                                <img src={ content.img } alt={ content.imgTitle } className={ imgClassList } />
                            </div>
                        </div>
                    );
                } ) }

            </div>
        );
    }
}

// Iterate over `sections` and attach them to this page