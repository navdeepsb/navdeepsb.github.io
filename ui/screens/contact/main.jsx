import React from "react";

import "./style.scss";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <p>Liked my work? I am looking for summer UI/UX internship opportunities, let’s chat.</p>
                <form method="POST" action="https://formspree.io/navdeepb@umich.edu" autoComplete="off">
                    <input type="hidden" name="_subject" value="Contact from portfolio - navdeepsb.com" />
                    <input type="email" name="_replyto" placeholder="Your email" spellCheck="false" required />
                    <textarea name="message" placeholder="Your message" rows="6" spellCheck="false" required />
                    <button type="submit">Send</button>
                </form>
                <p>Or email me at navdeepb@umich.edu</p>
            </div>
        );
    }
}