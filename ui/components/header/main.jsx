// Import dependencies:
import React from "react";
import { Link, IndexLink } from "react-router";

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
                <h2>UX Engineer seeking full-time opportunities starting Summer 2018</h2>
                <FibonacciSeparator />
                <nav>
                    <ul>
                        <li><IndexLink to="/" activeClassName="active">Portfolio</IndexLink></li>
                        <li><Link to="/atelier" activeClassName="active">Graphic Design</Link></li>
                        <li><Link to="/creative-writing" activeClassName="active">Creative Writing</Link></li>
                        <li><Link to="/resume" activeClassName="active">Resume</Link></li>
                        <li><Link to="/contact" activeClassName="active">Get In Touch</Link></li>
                        <li><Link to="/about" activeClassName="active">About Me</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
