import React from "react";

import "../style.scss"

import PortfolioProject from "../project.jsx";
import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";



export default class MeraInstitute extends PortfolioProject {
    render() {
        let bannerData = {
            projName: "merainstitute.com",
            roles: "Co-Founder, Front-End Developer",
            duration: "May-Sep 2015",
            imgSrc: require( "./merainstitute-banner.png" ),
            noOverlayOnImgWanted: true
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>Problem Statement</h4>
                    <p>To aggregate academic coaching institutes all over India providing preparation for highly competitive exams like JEE and AIIMS in a single website for students to easily decide the institute they want to join.</p>
                </div>
                <div className="content-block">
                    <h4>Target Audience</h4>
                    <ol>
                        <li>
                            <strong>Students</strong>
                            <br />
                            <p>Students straight out of the tenth grade face a huge dilemma regarding which coaching institute to join so they can better prepare for the exams. Mostly, it is word of mouth which leads to monopoly among the institutes. On this website, a student can access information such as an institute's faculty memebers, their best results, the courses offered and the physical locations of these institutes. These factors contribute a lot in the student's decision making.</p>
                        </li>
                        <br />
                        <li>
                            <strong>Parents of these students</strong>
                            <br />
                            <p>Since the parents of the prospective students are sponsoring their child's education, they are concerned about making the correct decision too. For them, this is like an investment because if the student is able to do well in an exam, they get admitted into the top engineering/medical colleges of India graduating from which the students have a better prospect of getting a good job.</p>
                        </li>
                        <br />
                        <li>
                            <strong>Marketing team of coaching institutes</strong>
                            <br />
                            <p>Every year, coaching institutes in India spend millions on publicising their brand so more students can join them. Our business model involved augmenting the coaching institutes' publicity through our website by providing them an interface to maintain their profile on our website. Most of the small-scale coaching institutes do not have a dedicated website of their own but through our website, they are able to get a virtual website which they can share with prospective students and their parents as a means of providing information is a single place.</p>
                        </li>
                    </ol>
                </div>
                <div className="content-block">
                    <h4>Technical Details</h4>
                    <p>Source code is available on <a href="https://github.com/navdeepsb/merainstitute-gists" target="_blank" rel="nofollow" tabIndex="-1" title="Source Code of merainstitute.com">Github</a>. This is a "gist" repo branched out from the main repo to show only the front-end code. The repo is just a collection of files. The actual working project is available with me, please contact me personally if you want to see it.</p>
                    <br />
                    <p>This startup was not only an opportunity for entrepreneurship but also to sharpen my front-end development skills. I was the sole front-end developer and designed, developed and intergrated the web pages with a Spring MVC back-end. I used Handlebars to make reusable templates and Backbone to handle complex form submissions. Grunt was used to automate the tasks as well as to cook up the front-end assets.</p>
                </div>
                <div className="content-block">
                    <h4>Note</h4>
                    <p>Below screenshots are from my development environment and not the production website which is down now. Please excuse the dummy data.</p>
                </div>
                <div className="content-block">
                    <h4>For Students and Parents</h4>
                    <div className="img-center">
                        <img src={ require( "./mi-home.png" ) } alt="Screenshot of merainstitute.com's homepage." />
                        <p>Fig. 1 - The home page. View the mobile version <a href={ require( "./mi-home-mobile.png" ) } target="_blank" rel="nofollow" tabIndex="-1" title="merainstitute.com's Homepage's Mobile Version">here</a>.</p>
                        <img src={ require( "./mi-find-institutes.png" ) } alt="Screenshot of merainstitute.com's find institute page." />
                        <p>Fig. 2 - The page where a student can filter out institutes and then view details by clicking on each institute card.</p>
                        <img src={ require( "./mi-institute-banner.png" ) } alt="Screenshot of merainstitute.com's institute banner page." />
                        <p>Fig. 3 - The banner a.k.a. virtual website available at merainstitute.com/&lt;username&gt;. This page is a summary of the institute information showcasing faculty, results, courses offered, centers, etc. It also contains reviews from various students. The intention of the banner is to allow less popular coaching institutes have a descent presence on the web.</p>
                        <img src={ require( "./mi-institute-achievers.png" ) } alt="Screenshot of merainstitute.com's institute details page." />
                        <p>Fig. 4 - Other than the banner, every institute also gets dedicated pages for their team (faculty), achievers (results), courses and more.</p>
                    </div>
                </div>
                <div className="content-block">
                    <h4>For Coaching Institutes</h4>
                    <div className="img-center">
                        <img src={ require( "./mi-institute-profile.png" ) } alt="Screenshot of merainstitute.com's institute manage profile page." />
                        <p>Fig. 5 - All the information made available in the pages described above is fed into the system via a "manage profile" page. This page can only be accessed by a institute after logging into the website and is basically a form equipped with partial saves and separated into logical sections. Each section is accessible throught tabs that are present on the top as well as the bottom.</p>
                        <img src={ require( "./mi-add-batch.png" ) } alt="Screenshot of merainstitute.com's add course/batch page." />
                        <p>Fig. 6 - Every coaching institute usually has a course that is run in multiple batches to accommodate a large number of students. These batches contain information such as the start date, end date, duration, slots and fees.</p>
                        <img src={ require( "./mi-reorder-entities.png" ) } alt="Screenshot of merainstitute.com's institute details page." />
                        <p>Fig. 7 - The institute personnel can re-order various entities on each page. Again, these controls are only visible to the institute when they log in to the website.</p>
                    </div>
                </div>
                <div className="content-block">
                    <h4>Impact</h4>
                    <ul>
                        <li>The coaching institutes in small towns greatly benefited from virtual websites.</li>
                        <li>Students were able to find information on one website.</li>
                        <li>I, personally, learned a lot about front-end devlopment.</li>
                    </ul>
                </div>
                <div className="content-block">
                    <h4>Key Learning</h4>
                    <p>Having not researched the problem statement thoroughly, we jumped straight into development and created the product with little market insights and limited information about the desirability of this product. For me, personally, at that time, the glam of startup and being able to practice front-end development full-time was enough to jump onboard and materialize this idea. In the future, <strong>I will not proceed with implementation without UX research</strong>.</p>
                </div>
            </div>
        );
    }
}