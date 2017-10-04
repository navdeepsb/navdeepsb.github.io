import React from "react";

import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";

import "../style.scss"

export default class Badger extends React.Component {
    render() {
        let bannerData = {
            projName: "BadgerJS",
            roles: "Interaction Designer, Front-End Developer",
            duration: "Jun 2015"
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>Problem Statement</h4>
                    <p>To display notifications without changing the current DOM structure of a web page.</p>
                </div>
                <div className="content-block">
                    <h4>About</h4>
                    <p>
                        Badger is a JavaScript notification library that I wrote to solve the disturbance caused in user experience in traditional form validations. A common way to convey error messages in forms are to insert an error text right below the input field or above the action button. In this way, the form components change position due to the addition of an extra element in the DOM. Consider a mobile device environment where the viewport is further reduced by the keyboard panel. If the input field is not focussed after the error has occurred, it might be the case that the user can totally ignore the error message and he/she can get confused regarding the form not being submitted despite clicking on the button.
                        <br /><br />
                        Other applications of Badger include displaying quick notifications to the user. These notifications stack one above the other and stay on top of the screen. The notifications can be of 3 types – success, warn and error. They can be short-lived (3 seconds by default) or made to persist until the user taps on them to make them go away. Badger is highly configurable and one can alter the appearance of the notification cards to match the colour scheme of one’s website.
                    </p>
                </div>
                <div className="content-block">
                    <h4>Demo</h4>
                    <p style={{ textAlign: "center" }}><img src={ require( "./demo.gif" ) } alt="Demonstration gif of Badger" /></p>
                    <p>
                        Regardless of the size of the viewport, the user will definitely see the card as it appears on the top of the screen. Moreover, the form components with which the user has gotten accustomed to do not change their positions at all. This Badger goes away automatically after a configurable "stay" time.
                        <br /><br />
                        Badger can be effectively used in lengthy forms and to display the results of AJAX requests on the webpage. For example, a user edits his profile and updates the display picture of his account. Instead of finding the best place to show the result of this upload, we can use Badger - a green Badger with appropriate message to show success and a red Badger in case the upload fails.
                    </p>
                </div>
                <div className="content-block">
                    <h4>Source Code</h4>
                    <p>
                        The library is written in <a href="http://coffeescript.org/" rel="nofollow" target="_blank" tabIndex="-1">CoffeeScript</a> that transpiles into JavaScript and has a dependency on <a href="https://jquery.com/" rel="nofollow" target="_blank" tabIndex="-1">jQuery</a>. Two APIs are exposed to the user :-
                    </p>
                    <ol>
                        <li>
                            <code>init()</code> - initializes Badger with custom configuration
                        </li>
                        <li>
                            <code>show()</code> - shows the notification cards on the screen
                        </li>
                    </ol>
                    <p>
                        The code is open source which you can find on <a href="https://github.com/navdeepsb/badger" rel="nofollow" target="_blank" tabIndex="-1" title="Source Code of Badger">Github</a>. Please visit the page for detailed documentation and how to use this library.
                        <br />
                        <br />
                        Badger is also available on <a href="http://bower.io/" rel="nofollow" target="_blank" tabIndex="-1">Bower</a> for quick download and integration.
                    </p>
                </div>
                <div className="content-block">
                    <h4>Impact</h4>
                    <ul>
                        <li>I used this library in my startup website and the results were greatly appreciated by my team.</li>
                        <li>I learned to use CoffeeScript which I personally liked a lot at that time.</li>
                    </ul>
                </div>
            </div>
        );
    }
}