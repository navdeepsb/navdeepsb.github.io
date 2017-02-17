import React from "react";
import { Link } from "react-router";

import "./style.scss"

export default class Atelier extends React.Component {
    render() {
        return (
            <div className="atelier">
                <img src={ require( "./diversity.png" ) } alt="Diversity" />
                <div className="description">
                    <p>My first jab at Adobe Illustrator. I made four faces using simple shapes; called it Diversity. One of my friends pointed out that the face on the bottom right looked a lot like me which I agreed. I made it the logo of my portfolio website.</p>
                </div>
                <img src={ require( "./alphabet-poster.jpg" ) } alt="Alphabet poster - The ABC of Camping" />
                <div className="description">
                    <p>The ABC of camping. I used a sans serif typeface (Montserrat) that fit well with the complementary color harmony. This gave an overall modern look which I was aiming for. Purpose of this poster is to hand it over to anyone who wants to go on a camping trip and let them know what they can expect at an awesome experience of camping. The icons used are from flaticon.com and are works of their original authors. Made in Adobe Illustrator.</p>
                </div>
                <img src={ require( "./about-me.jpg" ) } alt="About Me slide" />
                <div className="description">
                    <p>All about me in a single slide. Created in Adobe Illustrator.</p>
                </div>
                <img src={ require( "./floral-collage.png" ) } alt="Flower Collage showcasing Composition" />
                <div className="description">
                    <p>Peach and its symbolism: an example of composition characterized by random balance and overall harmonious agreement. Created in Adobe Photoshop.</p>
                </div>
                <img src={ require( "./frisco.png" ) } alt="San Francisco - City of Dreams" />
                <div className="description">
                    <p>I always wanted to visit San Francisco and was in Berkeley visiting a good friend of mine during the 2016 holidays. Created this mini-banner in Illustrator for the upcoming awesome trip at that time.</p>
                </div>
                <img src={ require( "./start-finish-share.png" ) } alt="Start. Finish. Share." />
                <div className="description">
                    <p>I have a thing for silhouettes. Used Adobe Photoshop to convey my new year resolution for 2017.</p>
                </div>
                <img src={ require( "./cali-lines.png" ) } alt="Cali Lines" />
                <div className="description">
                    <p>Driving north of Berkeley, I noticed gigantic electric poles running over the freeway into an unpredictable yet spectacular landscape. This scene got stuck in my head and I tried to represent it in Illustrator.</p>
                </div>
                <img src={ require( "./dev-representation.png" ) } alt="Dev representation" className="logo" />
                <div className="description">
                    <p>A quick illustration to represent code, inspired by my Sublime Text.</p>
                </div>
                <img src={ require( "./design-representation.png" ) } alt="Design representation" className="logo" />
                <div className="description">
                    <p>Another quick one to represent design. The rainbow-themed hairstyle depicts creativity emanating from the mind.</p>
                </div>
                <img src={ require( "./dnd-poster.png" ) } alt="Dungeons and Dragons poster" />
                <div className="description">
                    <p>I DM'ed for a Dungeons and Dragons session and this was the poster I used to lure folks into the epic world of fantasy and drama. Created in Illustrator.</p>
                </div>
                <img src={ require( "./run-finder-logo.png" ) } alt="Run Finder logo" className="logo" />
                <div className="description">
                    <p>The logo for the <Link to="portfolio/run-finder" tabIndex="-1">Run Finder</Link> project. This logo captures the key differentiator of the app which is the ability to analyze tracks seggrageted in sections.</p>
                </div>
                <img src={ require( "./merainstitute-logo.png" ) } alt="merainstitute logo" className="logo" />
                <div className="description">
                    <p>The logo I designed for my startup, <Link to="portfolio/merainstitute" tabIndex="-1">merainstitute.com</Link>. The word "merainstitute" is made up of two words - "mera", meaning "my" in Hindi, and "institute", so the website means "my institute". I decided to focus on the letters "m" and "i" and this logo perfectly captures both these alphabets in a single shape. Designed in MS PowerPoint.</p>
                </div>
                <img src={ require( "../lusie/lusie-logo.png" ) } alt="Lusie logo" className="logo" />
                <div className="description">
                    <p>The logo for <Link to="portfolio/lusie" tabIndex="-1">Lusie</Link>. I used the number "51" to represent the letters "si" in the word "lusie". The end-result is quirky and very closely resembles the game, housie, which I automated. Designed in MS PowerPoint.</p>
                </div>
            </div>
        );
    }
}