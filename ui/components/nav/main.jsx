// Import dependencies:
import React from "react";
import { Link, IndexLink } from "react-router";

// Import styles:
import "./style.scss";

// Import data:
import NAV_LINKS from "../../common/web-links.json";


export default class Nav extends React.Component {
    getId( navLink ) {
        return "nav-" + navLink.substr( 1 );
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><IndexLink to={ NAV_LINKS.HOME } activeClassName="active">Portfolio</IndexLink></li>
                    <li><Link to={ NAV_LINKS.GRAPHIC_DESIGN } id={ this.getId( NAV_LINKS.GRAPHIC_DESIGN ) } activeClassName="active">Graphic Design</Link></li>
                    <li><Link to={ NAV_LINKS.CREATIVE_WRITING } activeClassName="active">Creative Writing</Link></li>
                    <li><Link to={ NAV_LINKS.RESUME } activeClassName="active">Resume</Link></li>
                    <li><Link to={ NAV_LINKS.CONTACT } activeClassName="active">Get In Touch</Link></li>
                    <li><Link to={ NAV_LINKS.ABOUT_ME } activeClassName="active">About Me</Link></li>
                </ul>
            </nav>
        );
    }
}