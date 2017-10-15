// Import dependencies:
import React from "react";
import ReactGA from "react-ga";
import { render as ReactDOMRender } from "react-dom";
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from "react-router";
import useScroll from "react-router-scroll/lib/useScroll";

// Import components:
import Header from "./ui/components/header/main.jsx";
import Navigation from "./ui/components/nav/main.jsx";
import MobileNavigationHelper from "./ui/components/nav/mobile.jsx";
import Footer from "./ui/components/footer/main.jsx";
import PortfolioScreen from "./ui/screens/portfolio/main.jsx";
import RunFinderScreen from "./ui/screens/portfolio/run-finder/main.jsx";
import ConsultantDTEScreen from "./ui/screens/portfolio/consultant-dte/main.jsx";
import CyclikaScreen from "./ui/screens/portfolio/cyclika/main.jsx";
import LusieScreen from "./ui/screens/portfolio/lusie/main.jsx";
import AtelierScreen from "./ui/screens/atelier/main.jsx";
import AtelierPieceScreen from "./ui/screens/atelier/piece.jsx";
import BadgerScreen from "./ui/screens/portfolio/badger/main.jsx";
import WorthyScreen from "./ui/screens/portfolio/worthy/main.jsx";
import MeraInstituteScreen from "./ui/screens/portfolio/merainstitute/main.jsx";
import AudiovateScreen from "./ui/screens/portfolio/audiovate/main.jsx";
import ExpediaScreen from "./ui/screens/portfolio/expedia/main.jsx";
import GeomeTRYScreen from "./ui/screens/portfolio/geometry-type/main.jsx";
import CreativeWritingScreen from "./ui/screens/creative-writing/main.jsx";
import ArticleScreen from "./ui/screens/creative-writing/article.jsx";
import ResumeScreen from "./ui/screens/resume/main.jsx";
import ContactScreen from "./ui/screens/contact/main.jsx";
import AboutScreen from "./ui/screens/about/main.jsx";
import NotFoundScreen from "./ui/screens/404/main.jsx";

// Import styles:
import "./ui/common/reset.scss";

// Import data:
import NAV_LINKS from "./ui/common/web-links.json";


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
                    <Navigation />
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
            <Route path={ NAV_LINKS.PORTFOLIO } component={ PortfolioScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/run-finder" } component={ RunFinderScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/consultant-dte" } component={ ConsultantDTEScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/cyclika" } component={ CyclikaScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/lusie" } component={ LusieScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/badger" } component={ BadgerScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/worthy" } component={ WorthyScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/merainstitute" } component={ MeraInstituteScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/audiovate" } component={ AudiovateScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/expedia" } component={ ExpediaScreen } />
            <Route path={ NAV_LINKS.PORTFOLIO + "/geometry-type" } component={ GeomeTRYScreen } />
            <Route path={ NAV_LINKS.GRAPHIC_DESIGN } component={ AtelierScreen } />
            <Route path={ NAV_LINKS.GRAPHIC_DESIGN + "/:piece" } component={ AtelierPieceScreen } />
            <Route path={ NAV_LINKS.CREATIVE_WRITING } component={ CreativeWritingScreen } />
            <Route path={ NAV_LINKS.CREATIVE_WRITING + "/:articleName" } component={ ArticleScreen } />
            <Route path={ NAV_LINKS.RESUME } component={ ResumeScreen } />
            <Route path={ NAV_LINKS.CONTACT } component={ ContactScreen } />
            <Route path={ NAV_LINKS.ABOUT_ME } component={ AboutScreen } />
            <Route path="*" component={ NotFoundScreen } />
        </Route>
    </Router>,
    document.getElementById( "content" )
);