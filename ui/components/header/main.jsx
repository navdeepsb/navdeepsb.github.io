// Import dependencies:
import React from "react";

// Import components:
import FibonacciSeparator from "../fibo-separator/main.jsx";

// Import styles:
import "./style.scss";

// Import assets:
import logoSrc from "./logo.svg";
import titles from "./data.json";

// Variables:
const TITLE_UPDATE_INTERVAL = 7; // in seconds

export default class Header extends React.Component {
    constructor() {
        super();

        let initialIndex   = 0;
        let filteredTitles = titles.filter( title => title.show );

        this.state = {
            titles: filteredTitles,
            titlesLen: filteredTitles.length,
            titleToShow: filteredTitles[ initialIndex ] || "",
            currIndex: initialIndex
        };
    }

    componentDidMount() {
        let intervalId = window.setInterval( this.updateHeaderText.bind( this ), TITLE_UPDATE_INTERVAL * 1000 );
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        window.clearInterval( this.state.intervalId );
    }

    updateHeaderText() {
        // Set the current message:
        let currIndex = this.state.currIndex;
        this.setState({ titleToShow: this.state.titles[ currIndex ] });

        // Update the index for next message:
        let nextIndex = ++currIndex >= this.state.titlesLen ? 0 : currIndex;
        this.setState({ currIndex: nextIndex });
    }

    render() {
        return (
            <div className="header">
                <img src={ logoSrc } width="70" alt="Website logo" />
                <h1>Navdeep Singh Bagga</h1>
                <h2>{ this.state.titleToShow.message }</h2>
                <FibonacciSeparator />
            </div>
        );
    }
}
