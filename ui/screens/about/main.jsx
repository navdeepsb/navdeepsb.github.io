import React from "react";

import "./style.scss";

import quoteSrc from "./quotation-mark.svg";
import berkeleyMarinaSrc from "./berkeley-marina.jpeg";
import devDesSrc from "./dev+des.svg";
import dalLakeSrc from "./dal-lake.jpg";
import coloradoSrc from "./independence-pass-co.jpg";
import yosemiteSrc from "./yosemite-falls.jpg";


export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="banner banner--fluid-height" style={{ background: "none" }}>
                    <div className="banner__image">
                        <div className="img-wrapper top-img">
                            <img src={ berkeleyMarinaSrc } alt="Image of Navdeep looking over Berkeley Marina" />
                        </div>
                    </div>
                    <div className="banner__text">
                        <img src={ quoteSrc } className="persist" width="30" alt="Quote icon" />
                        <p>Great designers don’t fall in love with their solution. Great designers fall in love with the problem.</p>
                        <em>- Jared Spool</em>
                    </div>
                </div>
                <div className="pitch">
                    <p className="salutation">Hi!</p>
                    <p>
                        My name is Navdeep and I also go by Navi.
                        <br /><br />
                        I am interested in user-centered design, a passion that brought me to the University of Michigan’s School of Information where I am currently pursuing Master of Science in Information specializing in Human-Computer Interaction. Always fascinated by User Interface design, I discovered my affinity for User Experience while working on my startup’s website where I made key decisions as a Front-End Developer to make the experience of a visitor seamless and worthwhile. At grad school, I am honing my UI/UX skills by applying various concepts learned in real-world projects. I have come to know that iteration and feedback are important aspects of a design process  and one should focus on the user problem rather than the volatile solution.
                        <br /><br />
                        I also have a natural inclination towards graphic design which is evident from this portfolio which I designed on my own in Adobe XD. I keep my designs simple, meaningful and insightful. I like to think of graphic design as an opportunity to convey information in an open and creative manner.
                        <br /><br />
                        Having worked in the professional industry and having co-founded a startup, I am adept in collaborating effectively with teams comprising diverse roles as well as staying self-motivated for long spells. Possessing both development and design skills, I stand out as an aspiring UX professional.
                        <br /><br />
                        <img src={ devDesSrc } alt="Development plus design equals awesome!" />
                        <br /><br />
                        When I am not UI/UXing, I like to write short articles, play my acoustic guitar and explore new sounds on Spotify or YouTube. I love to groove to the likes of Tame Impala, King Gizzard & the Lizard Wizard, Mac DeMarco and Klaus Johann Grobe. I am a Star Wars geek and a major <strong>Nature Buff</strong>.
                    </p>
                </div>
                <figure>
                    <img src={ dalLakeSrc } alt="Image of me overlooking the Dal Lake in Srinagar, Kashmir, India" />
                    <figcaption>Overlooking the pristine Himalayas at Dal Lake in Srinagar, Kashmir, India (Jun 2013)</figcaption>
                </figure>
                <figure>
                    <img src={ coloradoSrc } alt="Image of me at Independence Pass in Colorado, US" />
                    <figcaption>At Independence Pass in Colorado, US (Aug 2017)</figcaption>
                </figure>
                <figure>
                    <img src={ yosemiteSrc } alt="Image of me at Yosemite Lower Falls in California, US" />
                    <figcaption>At Yosemite Lower Falls in California, US (Sep 2017)</figcaption>
                </figure>
            </div>
        );
    }
}