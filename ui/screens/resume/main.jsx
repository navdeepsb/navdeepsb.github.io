import React from "react";

import "./style.scss";

import resumeEvents from "./data.json";

class Event extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <div className="event">
                <div className="event__timestamp">
                    <p>{ data.timerange }</p>
                </div>
                <div className="event__details">
                    <p className="title">{ data.title }</p>
                    <p className="location">{ data.location }</p>
                    <ul>
                    { data.details.map( ( item, idx ) => {
                        return <li key={ idx }>{ item }</li>;
                    }) }
                    </ul>
                </div>
            </div>
        );
    }
}

export default class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                <p className="pdf-text">
                    <a href={ require( "./Resume - Navdeep Singh Bagga - UMSI 2018.pdf" ) } target="_blank" rel="nofollow" title="Download Resume as a PDF">Download Resume as a PDF</a>
                </p>
                { resumeEvents.filter( item => !item.noShow ).map( ( event, idx ) => {
                    return <Event data={ event } key={ idx } />;
                }) }
            </div>
        );
    }
}