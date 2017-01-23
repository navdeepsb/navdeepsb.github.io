import React from "react";

import "./style.scss";

import quoteSrc from "./quotation-mark.svg";
import topImageSrc from "./berkeley-marina.jpeg";
import devDesSrc from "./dev+des.svg";
import bottomImageSrc from "./dal-lake.jpg";


export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="banner">
                    <div className="banner__image">
                        <div className="img-wrapper top-img">
                            <img src={ topImageSrc } alt="Image of Navdeep looking over Berkeley Marina" />
                        </div>
                    </div>
                    <div className="banner__text">
                        <img src={ quoteSrc } width="30" alt="Quote icon" />
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
                        When I am not UI/UXing, I like to write short articles, play my acoustic guitar and explore new sounds on Spotify or YouTube. I love to groove to the likes of Tame Impala, King Gizzard & the Lizard Wizard and Mac DeMarco. I am also a nature lover and a Star Wars geek.
                    </p>
                </div>
                <p style={{ textAlign: "center" }}>
                    <img src={ bottomImageSrc } alt="Image of me overlooking the Dal Lake in Srinagar, Kashmir, India" />
                </p>
            </div>
        );
    }
}