// Import dependencies:
import React from "react";
import { render as ReactDOMRender } from "react-dom";
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from "react-router";
import useScroll from "react-router-scroll/lib/useScroll";

// Import components:
import Header from "./ui/components/header/main.jsx";
import Footer from "./ui/components/footer/main.jsx";
import Article from "./ui/templates/article/main.jsx";
import PortfolioScreen from "./ui/screens/portfolio/main.jsx";
import RunFinderScreen from "./ui/screens/portfolio/run-finder/main.jsx";
import ConsultantDTEScreen from "./ui/screens/portfolio/consultant-dte/main.jsx";
import CyclikaScreen from "./ui/screens/portfolio/cyclika/main.jsx";
import LusieScreen from "./ui/screens/portfolio/lusie/main.jsx";
import AtelierScreen from "./ui/screens/portfolio/atelier/main.jsx";
import BadgerScreen from "./ui/screens/portfolio/badger/main.jsx";
import MeraInstituteScreen from "./ui/screens/portfolio/merainstitute/main.jsx";
import CreativeWritingScreen from "./ui/screens/creative-writing/main.jsx";
import ResumeScreen from "./ui/screens/resume/main.jsx";
import ContactScreen from "./ui/screens/contact/main.jsx";
import AboutScreen from "./ui/screens/about/main.jsx";
import NotFoundScreen from "./ui/screens/404/main.jsx";

// Import styles:
import "./ui/common/reset.scss";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    { this.props.children }
                </div>
                <Footer />
            </div>
        );
    }
}


ReactDOMRender(
    <Router history={ hashHistory } render={applyRouterMiddleware(useScroll())}>
        <Route path="/" component={ App }>
            <IndexRoute component={ PortfolioScreen } />
            <Route path="portfolio" component={ PortfolioScreen } />
            <Route path="portfolio/run-finder" component={ RunFinderScreen } />
            <Route path="portfolio/consultant-dte" component={ ConsultantDTEScreen } />
            <Route path="portfolio/cyclika" component={ CyclikaScreen } />
            <Route path="portfolio/lusie" component={ LusieScreen } />
            <Route path="portfolio/atelier" component={ AtelierScreen } />
            <Route path="portfolio/badger" component={ BadgerScreen } />
            <Route path="portfolio/merainstitute" component={ MeraInstituteScreen } />
            <Route path="creative-writing" component={ CreativeWritingScreen } />
            <Route path="creative-writing/:articleName" component={ Article } />
            <Route path="resume" component={ ResumeScreen } />
            <Route path="contact" component={ ContactScreen } />
            <Route path="about" component={ AboutScreen } />
            <Route path="*" component={ NotFoundScreen } />
        </Route>
    </Router>,
    document.getElementById( "content" )
);