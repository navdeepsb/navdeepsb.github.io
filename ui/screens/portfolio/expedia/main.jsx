import React from "react";

import ProjectBannerTpl from "../../../templates/project-banner/main.jsx";

import "../style.scss"


export default class Expedia extends React.Component {
    render() {
        let bannerData = {
            projName: "Expedia",
            roles: "UX Researcher",
            duration: "Jan-Apr 2017",
            imgSrc: require( "./steve-halama-aeroplane.jpg" ),
            imgCredit: {
                author: "Steve Halama",
                link: "https://unsplash.com/@steve3p_0"
            },
            noOverlayOnImgWanted: true
        };

        return (
            <div className="project">
                <ProjectBannerTpl data={ bannerData } />
                <div className="content-block">
                    <h4>About</h4>
                     <p>This project is part of my academic Winter '17 term at U-M when I was enrolled in SI 622 (Needs Assessment & Usability Evaluation). This project involved a team of students coordinating with a real-world client and evaluating one of their products in terms of usability. Our team comprised of <a href="https://www.linkedin.com/in/gaurangalat" rel="nofollow" target="_blank" tabIndex="-1" title="Gaurang's LinkedIn">Gaurang Alat</a>, <a href="https://www.linkedin.com/in/sanmeetiit" rel="nofollow" target="_blank" tabIndex="-1" title="Sanmeet's LinkedIn">Sanmeet Jasuja</a>, Megan Kipp, <a href="https://www.linkedin.com/in/kehanliao" rel="nofollow" target="_blank" tabIndex="-1" title="Kehan's LinkedIn">Kehan Liao</a> and myself (<strong>"Team Odyssey"</strong>), all U-M School of Information students with an interest in HCI. Our client was Expedia and we were asked to evaluate the usability of their iOS app.</p>
                    <h4 className="subtitle">Project scope</h4>
                     <p>With the primary purpose of this <strong>iOS app v8.4</strong> being booking tickets and reserving hotels, we decided to focus on the relatively new <strong>Bundles feature</strong> which combines flight and hotel booking in the same workflow, saving the user time and a few bucks. After meeting with the client initially and confirming the scope, the primary target audience for this project was decided to be <strong>working-class professionals in the age range of 25-50</strong>. Our final deliverable was decided to be a <strong>&lt; 10 min video</strong> summarizing all the findings:</p>
                    <figure>
                        <div className="fluid-media">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Y24xAXjlPj4?rel=0" frameborder="0" rel="nofollow" allowfullscreen></iframe>
                        </div>
                        <figcaption>Final deliverable summarizing all the findings (narrated by Gaurang)</figcaption>
                    </figure>
               </div>
               <div className="content-block">
                    <h4>The Process</h4>
                    <p>We followed the following steps in our usability evaluation:</p>
                    <ol>
                        <li>Interaction Map</li>
                        <li>User Interviews</li>
                        <li>Comparative Analysis</li>
                        <li>Surveys</li>
                        <li>Heuristic Evaluation</li>
                        <li>Usability Test</li>
                        <li>Final video</li>
                    </ol>
                    <br />
                    <h4 className="subtitle">Interaction Map</h4>
                    <p>We developed an interaction map for the Bundles workflow to understand it better and identify high-level issues and things that work really well.</p>
                    <figure>
                        <img src={ require( "./interaction-map-sketch.jpg" ) } alt="A sketch of the interaction map" className="no-border" />
                        <figcaption>Fig. 1 - A sketch of interaction map of Expedia iOS app's Bundles workflow</figcaption>
                    </figure>
                    <br />
                    <h4 className="subtitle">User interviews</h4>
                    <p>Our team interviewed 5 users within a course of 1 week in pairs of two wherein one would take the role of the primary interviewer and the other the role of a note-taker. Our interview questions were framed around the following topics:</p>
                    <ul>
                        <li>Basic introduction (ice-breakers)</li>
                        <li>Travel habits</li>
                        <li>Comfort with technology</li>
                        <li>Choice of booking platform</li>
                    </ul>
                    <p>Each interview was recorded upon the interviewee's consent and then transcibed to add to the collective appendix in the final deliverable to the client.</p>
                    <br />
                    <h4 className="subtitle">Personas</h4>
                    <p>After concluding the interviews, we devised 3 personas and created a scenario for each to highlight how a particular travel planning goes on. Fig. 2-4 depict these personas.</p>
                    <br />
                    <br />
                    <figure>
                        <img src={ require( "./persona-1.png" ) } alt="Persona #1" className="padded" />
                        <figcaption>Fig. 2 - Persona #1 (travels with family)</figcaption>
                    </figure>
                    <p><strong>Scenario:</strong><br />With the Spring Break coming closer, Alex and his family are getting ready to go on a 5-day trip to Portland, Oregon. The preparation for this trip was started by Alex way back in October 16. Portland was always on Alex and his wife's bucket list as one of the places to visit. Since he is working full-time as an Analyst at the School of Public Health, he cannot catch a break except for the weekends. His children get a whole week off for the Spring Break so he decides to squeeze in an adventurous trip to Portland. With it’s natural beauty, Alex hopes this would be a memorable family trip. He booked the flight tickets way back in November for this trip because he likes to plan ahead of time. Given his hectic schedule, he cannot afford spending a lot of time planning and booking for family trips. That’s why he always goes for the best available deal without having any second opinions.</p>
                    <br />
                    <br />
                    <br />
                    <figure>
                        <img src={ require( "./persona-2.png" ) } alt="Persona #1" className="padded" />
                        <figcaption>Fig. 3 - Persona #2 (student traveller)</figcaption>
                    </figure>
                    <p><strong>Scenario:</strong><br />Joe wishes to travel to Mexico to visit her family friends in the upcoming Spring Break. Her plan is to stay home for a few days before heading off to Tijuana for a 3 day solo trip. With the break coming close, Joe knows she needs to book her tickets soon as the prices will go up. Being a student, she has a limited budget and can only afford this trip because of a descent-paying part-time job. Being a tech-savvy individual, Joe has used platforms such as Kayak, Expedia and Travelocity to book flight tickets in the past. Her go-to website is Travelocity, and she keeps on returning to it due to habit and familiarity with the interface. Joe looks up the flight prices on all 3 platforms to find the cheapest deals but the cheapest flight has a 4-hour layover in Florida. Joe hates layovers and decides to go for the direct flight, which costs about 100 USD more. Joe, however, does not trust the ratings and reviews of hotels on the internet and prefers booking only those hotels where her friends have stayed and have had a good experience. She quickly calls up her friend, Simone, and asks her for recommendations. Simone suggests that Travesty is a good hotel for Joe’s budget, so she calls up Travesty and books a room for 2 nights.</p>
                    <br />
                    <br />
                    <br />
                    <figure>
                        <img src={ require( "./persona-3.png" ) } alt="Persona #1" className="padded" />
                        <figcaption>Fig. 4 - Persona #3 (avid solo traveller)</figcaption>
                    </figure>
                    <p><strong>Scenario:</strong><br />Erika, being an avid traveler and a writer, wants to go to Greece on a solo trip from Apr 1-9. She hopes to translate her journey to Greece into a memoir and possibly a short novel. Erika picked Greece after seeing some breathtaking photos of Athens and Corinth on her Instagram. She checks her calendar and picks a set of dates to fly out to Athens. She logs on to kayak.com, her preferred platform to book flight tickets. Seeing a good deal being offered on the flights on 27th March, Erika decides to change her schedule and book them instead. After all, Erika does not want to spend a lot of money on her trip, and she would rather spend a lot of time looking for good deals rather than booking the available ones. Sometimes she has tried to book tickets through third party websites which Kayak links to but she has always had a bad experience with it, as the prices shoot up before checking out. She sometimes gets frustrated having to spend a lot of time online, trying to find a good deal and prefers booking her accommodation separately through Airbnb. Unlike flights, she prefers not to compromise comfort and quality over the price for a place to stay. She carefully goes through reviews and ratings, before booking an Airbnb stay. Most of her bookings are done via her laptop since she feels that apps do not offer all the features, unlike websites.</p>
                    <br />
                    <h4 className="subtitle">Comparative analysis</h4>
                    <p>Then we proceeded with comparative analysis of our client with existing popular products. We grouped these competitors into various categories (Fig. 4.), namely:</p>
                    <ul>
                        <li>Direct (same functionality delivered in the same way)</li>
                        <li>Indirect (same functionality in a different way)</li>
                        <li>Partial (some of the same functionality)</li>
                        <li>Analogous (different functionality but related in some way)</li>
                    </ul>
                    <br />
                    <figure>
                        <img src={ require( "./comparative-evaluation.png" ) } alt="Comparative analysis for this project" className="no-border" />
                        <figcaption>Fig. 5 - Comparative analysis of Expedia iOS app</figcaption>
                    </figure>
                    <br />
                    <h4 className="subtitle">Key findings from this analysis</h4>
                    <ul>
                        <li>Change the order of bundles, with flight booking before hotel booking</li>
                        <li>Add progress bar to provide the user some situational awareness</li>
                        <li>Make the loading screen less boring</li>
                        <li>Summarize similar user reviews for quick readability</li>
                        <li>Suggest cheaper flying dates during trip selection</li>
                    </ul>
                    <p><a href={ require( "./report-comparative-analysis-expedia-iOS-app.pdf" ) } target="_blank" rel="nofollow" title="Report - Comparative Analysis - Expedia iOS App">View detailed comparative analysis report</a></p>
                    <br />
                    <h4 className="subtitle">Surveys</h4>
                    <p>To obtain concrete statistical data and have a strong foundation for our final recommendations, we sent out a survey consisting of <strong>22 questions</strong> (w/ skip logic) and filtered out <strong>39 responses</strong> out of 60 corresponding to age &gt;=25. The below graphics depict key survey findings:</p>
                    <br />
                    <p><strong>Finding #1: Users do not primarily use mobile apps to book flights or hotels</strong></p>
                    <br />
                    <figure>
                        <img src={ require( "./viz-1-primary-medium-flight-booking.png" ) } alt="Visualization for primary medium to book flight tickets" className="no-border" />
                        <figcaption>Fig. 6 - Visualization for primary medium to book flight tickets</figcaption>
                    </figure>
                    <figure>
                        <img src={ require( "./viz-2-primary-medium-hotel-booking.png" ) } alt="Visualization for primary medium to book hotels/accommodations" className="no-border" />
                        <figcaption>Fig. 7 - Visualization for primary medium to book hotels/accommodations</figcaption>
                    </figure>
                    <br />
                    <p><strong>Finding #2: Users preferred booking flights before hotels</strong></p>
                    <br />
                    <figure>
                        <img src={ require( "./viz-3-itinerary-planning.png" ) } alt="Visualization for itinerary planning" className="no-border" />
                        <figcaption>Fig. 8 - Visualization for itinerary planning</figcaption>
                    </figure>
                    <br />
                    <p><strong>Finding #3: Combo deals is not a popular choice among users</strong></p>
                    <br />
                    <figure>
                        <img src={ require( "./viz-4-expedia-features.png" ) } alt="Visualization for the usage of Expedia features among users" className="no-border" />
                        <figcaption>Fig. 9 - Visualization for the usage of Expedia features among users</figcaption>
                    </figure>
                    <figure>
                        <img src={ require( "./viz-5-no-use-of-bundles.png" ) } alt="Visualization for reasons to not use combo deals" className="no-border" />
                        <figcaption>Fig. 10 - Visualization for reasons to not use combo deals</figcaption>
                    </figure>
                    <br />
                    <p><strong>Finding #4: Expedia is the most popular choice among users for booking flights and hotels but not necessarily the app</strong></p>
                    <br />
                    <figure>
                        <img src={ require( "./viz-6-popular-services-flights.png" ) } alt="Visualization for popular services to book flights" className="no-border" />
                        <figcaption>Fig. 11 - Visualization for popular services to book flights</figcaption>
                    </figure>
                    <figure>
                        <img src={ require( "./viz-7-popular-services-hotels.png" ) } alt="Visualization for popular services to book hotels/accommodations" className="no-border" />
                        <figcaption>Fig. 12 - Visualization for popular services to book hotels/accommodations</figcaption>
                    </figure>
                    <br />
                    <h4 className="subtitle">Key findings from this survey</h4>
                    <ul>
                        <li>Reverse the flow in Bundles from "hotels to flights" to "flights to hotels"</li>
                        <li>Establish trust in booking hotels and flights through a mobile app</li>
                    </ul>
                    <p><a href={ require( "./report-survey-expedia-iOS-app.pdf" ) } target="_blank" rel="nofollow" title="Report - Survey - Expedia iOS App">View detailed survey report</a></p>
                    <br />
                    <h4 className="subtitle">Heuristic evaluation</h4>
                    <p><strong>Nielsen’s Heuristics</strong>: According to Nielsen, <em>"Heuristic Evaluation is a usability engineering method for finding the usability problems in a user interface design so that they can be attended to as part of an iterative design process" (Nielsen, 1994 )</em>. Essentially Heuristic Evaluation is a method of assessing the user interface for any potential usability issues, done by a small set of evaluators, in accordance with recognized principles of usability i.e. heuristics.
                    </p>
                    <p>The scope of our project is limited to the Bundles feature of Expedia’s iOS app. We evaluated this feature on the basis of Nielsen’s heuristics given below:</p>
                    <ol>
                        <li>Visibility of system status ( is the user always informed about the status of the system? )</li>
                        <li>Match between system and the real world ( are real-world conventions being used? )</li>
                        <li>User control and freedom ( how easily can the user leave an unwanted state? )</li>
                        <li>Consistency and Standards ( does the system follow platform conventions? )</li>
                        <li>Error prevention ( can user errors be prevented easily? )</li>
                        <li>Recognition rather than recall ( is the user’s memory load minimized )</li>
                        <li>Flexibility and efficiency of use ( is the system flexible enough for all users? )</li>
                        <li>Aesthetic and minimal design ( is irrelevant information present in the dialogues? )</li>
                        <li>Help users recognize, diagnose, and recover from errors ( are error messages properly displayed? )</li>
                        <li>Help and documentation ( is help and documentation available to the user? )</li>
                    </ol>
                    <p>Along with the 10 different heuristics, Nielsen also proposed the concept of <em>severity levels (Nielsen, 1994)</em>, as shown in Fig. 13.</p>
                     <br />
                    <figure>
                        <img src={ require( "./heuristic-severity.png" ) } alt="Severity levels for Heuristic Evaluation" className="no-border padded" />
                        <figcaption>Fig. 13 - Severity levels for Heuristic Evaluation</figcaption>
                    </figure>
                    <figure>
                        <img src={ require( "./heuristic-evaluation.png" ) } alt="Heuristic Evaluation for Expedia iOS app" className="no-border" />
                        <figcaption>Fig. 14 - Heuristic Evaluation for Expedia iOS app</figcaption>
                    </figure>
                    <p><a href={ require( "./report-heuristic-evaluation-expedia-iOS-app.pdf" ) } target="_blank" rel="nofollow" title="Report - Heuristic Evaluation - Expedia iOS App">View detailed heuristic evaluation report</a></p>
                    <br />
                    <h4 className="subtitle">Usability Test</h4>
                    <p>We conducted 5 usability test sessions (including 1 pilot test) in pairs with one of us being the moderator and the other taking care of the logistics such as making sure the audio and video are recording, key events are being logged in a task sheet and are serving as a secondary quiet observer. We devised the following usability tasks supported by relevant scenarios to indulge the tester:</p>
                    <p><strong>Scenario I</strong></p>
                    <p>You live in Ann Arbor and you wish to fly out your spouse on a romantic getaway since your first anniversary is coming up. You plan to surprise your spouse with a vacation to New York, a place they have always wanted to visit. You wish to use Expedia’s vacation package (flights + hotels) feature to book your getaway. The next few tasks will walk you through the different phases that you will undergo while booking the package deal.</p>
                    <p><strong>Task #1</strong></p>
                    <ol>
                        <li>Open the Expedia App. Bypass the login portion, if necessary</li>
                        <li>Navigate to the Bundles section</li>
                        <li>Enter the location and dates for the bundle</li>
                        <li>Search for a hotel for a 3 nights stay</li>
                        <li>Book a hotel with at least 4 star rating with a budget of $700 per night</li>
                    </ol>
                    <p><strong>Task completion criteria</strong>: User selects a hotel that is satisfying the given requirements and reaches the outbound flight screen.</p>
                    <br />
                    <p><strong>Task #2</strong></p>
                    <p>( This task picks up from where task #1 was left )</p>
                    <p>You are loyal to Delta Air Lines and you want to reach a certain level of frequent flier miles to earn a free flight in the future.</p>
                    <ol>
                        <li>Book flight tickets (round trip tickets) for you and your spouse on Delta Airlines</li>
                        <li>Ensure that the flight(s) you pick have the shortest duration possible</li>
                        <li>If possible, try to remember the flight(s) that you have picked</li>
                    </ol>
                    <p><strong>Task completion criteria</strong>: User selects round trip flights satisfying the given requirements.</p>
                    <br />
                    <p><strong>Task #3</strong></p>
                    <p>Now you remembered that you have a free 4-nights stay at the Hilton in any city. You want to change your hotel choice in this bundle.</p>
                    <ol>
                        <li>Find The Hilton in New York city and add it in your bundle deal. Keep the flight selection same as previous task</li>
                        <li>After selecting the flights, go to the Checkout screen</li>
                    </ol>
                    <p><strong>Task completion criteria</strong>: User changes only the Hotel keeping the flights selection same as the previous task and reaches Checkout screen.</p>
                    <br />
                    <p><strong>Scenario II</strong></p>
                    <p>Bad news! You just received an email from your boss asking you to fly out to Chicago on April 2 to meet a potential investor. If you cannot make it to this meeting, your company stands to lose an investment of 15 million USD, and you might end up losing your job. You have to push your vacation to a different date and book flights + accommodation for this meeting.</p>
                    <p><strong>Task #4</strong></p>
                    <ol>
                        <li>Clear the current Bundles selection and start a new search</li>
                        <li>Enter the given details for the travel itinerary</li>
                        <li>Search for a cheap hotel ( less than 400 USD per night ) and add it to your deal</li>
                        <li>Book outbound flight ticket from Detroit, so that you can reach Chicago before 12pm on May 26</li>
                        <li>Book a return (inbound) flight from Chicago, on May 27 so that you can make it back to Detroit by 5pm</li>
                        <li>After selecting the flights, go to the Checkout screen and enter the following details:</li>
                    </ol>
                    <br />
                    <figure>
                        <img src={ require( "./usability-task-credit-card-info.png" ) } alt="Usability task credit card info" className="no-border padded" />
                    </figure>
                    <br />
                    <p><strong>Task completion criteria</strong>: User reaches the CVV checkout screen with the hotel and flights satisfying the given requirements.</p>
                    <br />
                    <br />
                    <figure>
                        <img src={ require( "./usability-task-user-demographics.png" ) } alt="Usability task user demographics" className="no-border" />
                        <figcaption>Fig. 15 - Usability task user demographics</figcaption>
                    </figure>
                    <br />
                    <h4 className="Key findings from usability tests"></h4>
                    <p><strong>Finding #1: Hotels page can be improved</strong></p>
                    <ul>
                        <li>Confusion between Stars and Guest Ratings</li>
                        <li>No option to search for hotel(s)</li>
                        <li>No option to filter out the list</li>
                    </ul>
                    <br />
                    <figure>
                        <img src={ require( "./usability-task-finding-1.png" ) } alt="Two kinds of ratings in the hotels screen" className="no-border" />
                        <figcaption>Fig. 16 - Two kinds of ratings in the hotels screen</figcaption>
                    </figure>
                    <br />
                    <p><strong>Finding #2: Date selection is confusing</strong></p>
                    <ul>
                        <li>Date selection for Bundles is not clear</li>
                        <li>Beginning and end date is not clearly distinguished</li>
                        <li>2 users missed selecting the end date</li>
                    </ul>
                    <br />
                    <figure>
                        <img src={ require( "./usability-task-finding-2.png" ) } alt="Confusing date selection" className="no-border" />
                        <figcaption>Fig. 17 - Confusing date selection</figcaption>
                    </figure>
                    <br />
                    <p><strong>Finding #3: Room selection interface is confusing</strong></p>
                    <ul>
                        <li>Confusion between "Select a room" and "Select" labels</li>
                        <li>Too many options for rooms in the list view</li>
                    </ul>
                    <br />
                    <figure>
                        <img src={ require( "./usability-task-finding-3.png" ) } alt="Confusing room selection" className="no-border" />
                        <figcaption>Fig. 18 - Confusing room selection</figcaption>
                    </figure>
                    <br />
                    <p><strong>Finding #4: Price change message perceived as an error message</strong></p>
                    <ul>
                        <li>Price change pop-up feels like an error message</li>
                        <li>Same message for price increase as well as decrease</li>
                    </ul>
                    <br />
                    <figure>
                        <img src={ require( "./usability-task-finding-4.png" ) } alt="Overwhelming price change pop-up" className="no-border" />
                        <figcaption>Fig. 19 - Overwhelming price change pop-up</figcaption>
                    </figure>
                    <p><a href={ require( "./report-usability-test-expedia-iOS-app.pdf" ) } target="_blank" rel="nofollow" title="Report - Usability Test - Expedia iOS App">View detailed usability test report</a></p>
                    <br />
                    <h4 className="subtitle">Final Video</h4>
                    <p>And at last, we consolidated all of our findings collected throughout the course of 4 months into a 7.5 min video. Seems crazy but we were able to ace it. The video is linked at the top.</p>
              </div>
               <div className="content-block">
                    <h4>Takeaways</h4>
                    <ul>
                        <li>UX Research is a slow and steady process often impacted by deadlines</li>
                        <li>Really enjoyed working with my team; it was great to brainstorm and bounce ideas off</li>
                        <li>Coordinating with clients involves periodic feedback and iteration</li>
                    </ul>
               </div>
           </div>
        );
    }
}