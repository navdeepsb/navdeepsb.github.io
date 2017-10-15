// Import dependencies:
import React from "react";

// Import components:
import FibonacciSeparator from "../fibo-separator/main.jsx";

// Import styles:
import "./style.scss";

// Import assets:
import logoSrc from "./logo.svg";



export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={ logoSrc } width="70" alt="Website logo" />
                <h1>Navdeep Singh Bagga</h1>
                <h2>Product Designer seeking full-time opportunities starting Summer 2018</h2>
                <FibonacciSeparator />
            </div>
        );
    }
}
