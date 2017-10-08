import React from "react";

import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";

import "./style.scss"
import "../style.scss"


// Variables:
let initialText = "geometry";



class CustomType extends React.Component {
    render() {
        var glyph = this.props.glyph;
        let elemToRender = null;

        if( glyph.trim() )
            elemToRender = <img className="custom-type no-border" src={ require( "./glyphs/" + glyph + ".png" ) } />;

        return (
            <div className="custom-type__wrapper">{ elemToRender }</div>
        );
    }
}


class KeyboardKey extends React.Component {
    render() {
        return (
            <div className="kbd-key">
                <p className={ this.props.data.isInvisible ? "invisble-text" : "" }>{ this.props.data.key }</p>
            </div>
        );
    }
}


export default class GeomeTRY extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            glyphs: initialText.split( "" ).map( char => { return { glyph: char }; } ),
            typedText: initialText,
            hideWarnMsg: true
        };

        this.handleTypeKeyPress = this.handleTypeKeyPress.bind( this );
    }

    handleTypeKeyPress( e ) {
        let keyPressedCode = e.keyCode;

        // console.log( "#", e.key, " -> code:", e.keyCode );
        this.setState({ hideWarnMsg: true });

        if( keyPressedCode == 8 && this.state.glyphs.length ) {
            // "backspace"
            this.removeGlyph();
        }
        else if( ( keyPressedCode > 47 && keyPressedCode < 91 ) || keyPressedCode === 32 ) {
            // [a-z|0-9] or \s
            this.addGlyph( String.fromCharCode( keyPressedCode ).toLowerCase() );
        }
        else {
            // Key not supported...
            this.setState({ hideWarnMsg: false });
            e.preventDefault();
        }
    }

    addGlyph( glyph ) {
        // Add this `glyph` to the state:
        const glyphs = [ ...this.state.glyphs, { glyph: glyph } ];

        this.setState({
            glyphs: glyphs,
            typedText: this.state.typedText + glyph
        });
    }

    removeGlyph() {
        // Remove the last glyph from state:
        this.state.glyphs.splice( -1, 1 );

        this.setState({
            glyphs: this.state.glyphs,
            typedText: this.state.typedText.substr( 0, this.state.typedText.length - 1 ),
        });
    }

    render() {
        let bannerData = {
            projName: "geomeTRY",
            roles: "Type Designer?",
            duration: "Oct- 2017",
            imgSrc: require( "./geometry-sample.jpg" ),
            noOverlayOnImgWanted: true,
            inProgress: true
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>Try It Out...</h4>
                    <input type="text" ref="typeInp" tabIndex="0" onKeyDown={ this.handleTypeKeyPress } value={ this.state.typedText } placeholder="Type something..." />
                    <p className={ "type-support-warn" + ( this.state.hideWarnMsg ? " hide" : "" ) }>Character not supported!</p>
                    <p>Keys allowed: <KeyboardKey data={{ key: "a" }} /> - <KeyboardKey data={{ key: "z" }} />,&nbsp;&nbsp;&nbsp;<KeyboardKey data={{ key: "0" }} /> - <KeyboardKey data={{ key: "9" }} />,&nbsp;&nbsp;&nbsp;<KeyboardKey data={{ key: "xxxxxxxxxxxxxxxxxxxxxxxx", isInvisible: true }} />&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;<KeyboardKey data={{ key: "←" }} /></p>
                    <div className="type-canvas">
                        { this.state.glyphs.map( ( item, idx ) => {
                            return <CustomType glyph={ item.glyph } />;
                        } ) }
                    </div>
                </div>
                <div className="content-block">
                    <h4>Inspiration</h4>
                    <p><strong>Symmetry + Geometry</strong></p>
                    <p>I am a fan of the Modernism style of art and embody minimalism, symmetry, balance and use of simple geometry in my designs. Numbers matter to me in terms of precise measurements and accurate alignments.</p>
                    <p>For this type design, I totally embraced geomotery esp. the shape circle. Restricting myself to use the following shapes resulted in a typeface leaning towards Postmodernism rather.</p>
                    <figure>
                        <img src={ require( "./shapes-used.png" ) } alt="Image of shapes used for geomeTRY type design" className="no-border" />
                        <figcaption>Fig. 1 - Shapes used for geomeTRY type design</figcaption>
                    </figure>
                </div>
                <div className="content-block">
                    <h4>Tools</h4>
                    <p>Adobe Illustrator</p>
                    <p>And for the type rendering widget above, I exported all the glyphs as equal height PNGs. Then I hooked up the key entered to the corresponding PNG glyph using simple React code.</p>
                </div>
                <div className="content-block">
                    <h4>Outcome</h4>
                    <figure>
                        <img src={ require( "./type-sample-01.jpg" ) } alt="Image of first type sample" className="no-border" />
                        <figcaption>Fig. 2 - Alphabets sample<p className="subtitle">Photo by <a href="https://unsplash.com/@dburka" rel="nofollow" target="_blank" tabIndex="-1" title="Daniel Burka">Daniel Burka</a></p></figcaption>
                    </figure>
                    <figure>
                        <img src={ require( "./type-sample-02.jpg" ) } alt="Image of numbers sample" className="no-border" />
                        <figcaption>Fig. 3 - Numbers sample<p className="subtitle">Photo by <a href="https://unsplash.com/@garthpratt" rel="nofollow" target="_blank" tabIndex="-1" title="Garth Pratt">Garth Pratt</a></p></figcaption>
                    </figure>
                </div>
           </div>
        );
    }
}