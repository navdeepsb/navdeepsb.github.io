import React from "react";

import "../style.scss"

export default class Lusie extends React.Component {
    render() {
        return (
            <div className="project">
                <div className="banner img-wrapper" style={{ background: "#ff6b6b" }}>
                    <div className="banner__overlay" style={{ background: "none" }}>
                        <div className="banner__text-container">
                            <h3>Lusie</h3>
                            <p>Roles: Problem Solver, Developer | Oct 2015</p>
                        </div>
                    </div>
                </div>
                <div className="content-block">
                    <h4>Problem Statement</h4>
                    <p>To automate the household board game of housie a.k.a. tambola a.k.a. Indian Bingo.</p>
                </div>
                <div className="content-block">
                    <h4>Why?</h4>
                    <p>
                        A popular pass time among my family was to play housie on the weekends. Housie involves one player, the moderator, to draw numbers randomly from a pool of chips numbered 1-90 who then places those chips on a physical board to keep track of the numbers drawn. The other players get a stub with random numbers on them. As the moderator calls out a number, the players strike off the number if it matches the number drawn. Prices are won on the basis of certain rules like striking off all the numbers in one row, striking the first 7 numbers and so on.
                        <br /><br />
                        My younger sister was the staple moderator in our group and the rest of us would play and reap benefits of winning prices. This would deprive my sister of playing the game herself. On one opportune day, I thought of outsourcing the number drawing to a computer program. Random number generation is not a big deal to code so I decided to automate Housie through a web application. I designed the interface to keep it as close to the real game and developed the app within a day. My attempt was a successful one and after initial trials and fixing minor bugs, Lusie was born! Now we just had to start/stop the game and rest was taken care by Lusie.
                    </p>
                </div>
                <div className="content-block">
                    <h4>The Web App</h4>
                    <p>Below is a ridiculously simple layout for the app. Gigantic number depicts the current number drawn and the circled numbers are the ones already drawn. Two handy buttons to start/end and pause/resume the gameplay are also present. The text box besides the buttons contains the seconds after which each number should be drawn (absolutely configurable, just pause the game, change the value and resume to reflect the changes).</p>
                    <img src={ require( "./screenshot-light.png" ) } alt="Screenshot of Lusie - light" />
                    <p>Fig. 1 - Standard gameplay</p>
                    <img src={ require( "./screenshot-dark.png" ) } alt="Screenshot of Lusie - dark" />
                    <p>Fig. 2 - And a dark theme for the night watchers</p>
                </div>
                <div className="content-block">
                    <h4>Source Code</h4>
                    <p>The web app is written in Vanilla JavaScript employing prototypal JavaScript particularly. The source code is proudly hosted on <a href="https://github.com/navdeepsb/lusie" rel="nofollow" target="_blank" tabIndex="-1" title="Source Code of Lusie">Github</a>, please check it out.</p>
                </div>
                <div className="content-block">
                    <h4>Impact</h4>
                    <ul>
                        <li>My sister could now participate in the game instead of being a mod.</li>
                        <li>This little piece of program inspired my sister and acquainted her with the power of automation.</li>
                        <li>The rate of number drawing was now uniform and could be configured further to make the gameplay quick. This added a sense of thrill to the game.</li>
                        <li>We no longer needed the abundant tiny number chips which were very easy to loose.</li>
                        <li>The issue of bias was eliminated since the number drawing was not influenced in anyway.</li>
                    </ul>
                </div>
                <div className="content-block">
                    <h4>Bonus: logo design</h4>
                    <img src={ require( "./lusie-logo.png" ) } alt="Lusie logo" width="350" style={{ border: 0 }} />
                </div>
            </div>
        );
    }
}