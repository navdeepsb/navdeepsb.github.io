// Import dependencies:
import React from "react";
import ReactGA from "react-ga";
import { render as ReactDOMRender } from "react-dom";
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from "react-router";
import useScroll from "react-router-scroll/lib/useScroll";

// Import components:
import Header from "./ui/components/header/main.jsx";
import Footer from "./ui/components/footer/main.jsx";
import PortfolioScreen from "./ui/screens/portfolio/main.jsx";
import RunFinderScreen from "./ui/screens/portfolio/run-finder/main.jsx";
import ConsultantDTEScreen from "./ui/screens/portfolio/consultant-dte/main.jsx";
import CyclikaScreen from "./ui/screens/portfolio/cyclika/main.jsx";
import LusieScreen from "./ui/screens/portfolio/lusie/main.jsx";
import AtelierScreen from "./ui/screens/atelier/main.jsx";
import BadgerScreen from "./ui/screens/portfolio/badger/main.jsx";
import WorthyScreen from "./ui/screens/portfolio/worthy/main.jsx";
import MeraInstituteScreen from "./ui/screens/portfolio/merainstitute/main.jsx";
import AudiovateScreen from "./ui/screens/portfolio/audiovate/main.jsx";
import ExpediaScreen from "./ui/screens/portfolio/expedia/main.jsx";
import CreativeWritingScreen from "./ui/screens/creative-writing/main.jsx";
import ArticleScreen from "./ui/screens/creative-writing/article.jsx";
import ResumeScreen from "./ui/screens/resume/main.jsx";
import ContactScreen from "./ui/screens/contact/main.jsx";
import AboutScreen from "./ui/screens/about/main.jsx";
import NotFoundScreen from "./ui/screens/404/main.jsx";

// Import styles:
import "./ui/common/reset.scss";


// Google Analytics stuff:
ReactGA.initialize( "UA-90739428-01" );
function logPageView() {
    let url = window.location.pathname + window.location.hash;
    ReactGA.set({ page: url });
    ReactGA.pageview( url );
}


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
    <Router history={ hashHistory } render={ applyRouterMiddleware( useScroll() ) } onUpdate={ logPageView }>
        <Route path="/" component={ App }>
            <IndexRoute component={ PortfolioScreen } />
            <Route path="portfolio" component={ PortfolioScreen } />
            <Route path="portfolio/run-finder" component={ RunFinderScreen } />
            <Route path="portfolio/consultant-dte" component={ ConsultantDTEScreen } />
            <Route path="portfolio/cyclika" component={ CyclikaScreen } />
            <Route path="portfolio/lusie" component={ LusieScreen } />
            <Route path="portfolio/badger" component={ BadgerScreen } />
            <Route path="portfolio/worthy" component={ WorthyScreen } />
            <Route path="portfolio/merainstitute" component={ MeraInstituteScreen } />
            <Route path="portfolio/audiovate" component={ AudiovateScreen } />
            <Route path="portfolio/expedia" component={ ExpediaScreen } />
            <Route path="atelier" component={ AtelierScreen } />
            <Route path="creative-writing" component={ CreativeWritingScreen } />
            <Route path="creative-writing/:articleName" component={ ArticleScreen } />
            <Route path="resume" component={ ResumeScreen } />
            <Route path="contact" component={ ContactScreen } />
            <Route path="about" component={ AboutScreen } />
            <Route path="*" component={ NotFoundScreen } />
        </Route>
    </Router>,
    document.getElementById( "content" )
);