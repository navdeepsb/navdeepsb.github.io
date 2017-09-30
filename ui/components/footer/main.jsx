// Import dependencies:
import React from "react";

// Import components:
import FibonacciSeparator from "../fibo-separator/main.jsx";

// Import styles:
import "./style.scss";

// Import data:
import links from "./data.json";


// The component representing a social media link:
class SocialMediaLink extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <a href={ data.to } className="social-media__link img-wrapper" rel="nofollow" target="_blank" tabIndex="-1" style={{ background: data.background }} title={ `Link to ${ data.type }` }>
                <img src={ require( `./${ data.type }-logo.svg` ) } alt={ `Link to ${ data.type }` } />
            </a>
        );
    }
}


export default class Footer extends React.Component {
    render() {
        let currYear = new Date().getFullYear();

        return (
            <div className="footer">
                <FibonacciSeparator />
                <div className="footer__inner">
                    <div className="copyright">
                        <p>Copyright &copy; { currYear } Navdeep Singh Bagga</p>
                    </div>
                    <div className="social-media">
                        { links.map( ( link, idx ) => {
                            return <SocialMediaLink data={ link } key={ idx } />;
                        }) }
                    </div>
                </div>
            </div>
        );
    }
}