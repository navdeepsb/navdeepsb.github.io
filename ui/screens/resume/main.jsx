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
                { resumeEvents.map( ( event, idx ) => {
                    return <Event data={ event } key={ idx } />;
                }) }
                <p className="pdf-text">
                    <a href={ require( "./resume.pdf" ) } target="_blank" rel="nofollow" title="Resume PDF">Download PDF</a>
                </p>
            </div>
        );
    }
}