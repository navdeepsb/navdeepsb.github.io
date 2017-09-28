import React from "react";

import "../style.scss"

// Variables:
let listItemGutter = "20px";

export default class Worthy extends React.Component {
    render() {
        return (
            <div className="project">
                <div className="banner img-wrapper">
                    <img src={ require( "./olga-delawrence-dollars-unsplash.jpg" ) } alt="Worthy banner" />
                    <div className="banner__overlay">
                        <div className="banner__text-container">
                            <h3>Worthy <span className="badge">In Progress</span></h3>
                            <p>Role: UX Researcher + Designer, Interaction Designer | Sep- 2017</p>
                        </div>
                    </div>
                </div>
                <div className="content-block">
                    <h4>The Backstory</h4>
                    <p>Since I have arrived in the US, I have become diligent about my expenses and having multiple dispersed sources of money such as bank accounts, credit cards and even things like Venmo, have hindered my ability to micro-manage my transactions.</p>
                    <br />
                    <h4 className="subtitle">Moving away from repititive tables</h4>
                    <p>Upon my roommate's advice, I started using Google Sheets for this. I would make a file for each year and after adding a sheet for the current month, I would cook some copy-pasta of yummy tables. Each table would represent one category of expenses the sum of which would link to a master table giving me an overview of my monthly expenses.</p>
                    <br />
                    <figure>
                        <img src={ require( "./table-format.png" ) } alt="The format of each category table shown with simple lines and typography" className="no-border padded" />
                        <figcaption>Fig. 1 - The format of each category table</figcaption>
                    </figure>
                    <figure>
                        <img src={ require( "./sheet-structure.png" ) } alt="Sheet structure of each sheet showing each category table being linked to the master table" className="no-border" />
                        <figcaption>Fig. 2 - The structure of each monthly sheet</figcaption>
                    </figure>
                    <br />
                    <p>Refer to this link to view the sheet format I used: <a href="https://goo.gl/55ZKpB" rel="nofollow" target="_blank" tabIndex="-1" title="Example of a budget sheet | Navdeep Singh Bagga">Google Sheets Budget file</a></p>
                    <p>I added predetermined budget in the master table to find if I exceeded my budget, which category did I do so. Color coding this excess also helped a lot. But soon I discovered that this method of expense management was tedious and could use some automation.</p>
                    <br />
                    <h4 className="subtitle">Problems with this approach</h4>
                    <ul>
                        <li style={{ marginBottom: listItemGutter }}>
                            <em>Adding new rows</em>
                            <br />
                            Adding new rows for one table would affect other tables situated side-by-side. One approach is to locate all the tables vertically below one another but isn't that an overkill? There's got to be a better solution.
                        </li>
                        <li style={{ marginBottom: listItemGutter }}>
                            <em>No insights</em>
                            <br />
                            At the end of the day, this approach was just a set of monthly sheets sitting in their own silos not sharing data with each other. What if these sheets could talk to each other? What if I can look at my categorical spends every month and corelate them with the allocated budget? And then, predict in advance when and if I am going to go over-budget?
                        </li>
                        <li style={{ marginBottom: listItemGutter }}>
                            <em>Shared transactions</em>
                            <br />
                            It is often the case that one of my roommates would pay a bill for the entire house and we would give them the owed amount. It would also be the case when I pay and I am owed. This is a good segway to introduce the concept of shared transactions. For the former case, I owe money and hence, my effective balance is my bank balance minus the amount I owe since this will be deducted eventually. For the latter case, my effective balance would be my bank account minus the amount deducted plus the amount owed to me. Let me visualize this in Fig. 3.
                            <br />
                            <br />
                            With the Google Sheets approach, I dealt with shared transactions with the help of a third-party app called <a href="https://www.splitwise.com/" rel="nofollow" target="_blank" tabIndex="-1" title="Split expenses with friends :: Splitwise">Splitwise</a>. We would add our shared transactions there and dealt with the amount owed to each other at the end of the month. This prevented me from getting a clear view of my effective balance since I would consider only the effective deduction and not the actual deduction from the bank balance, referring to the case when I owed someone.
                        </li>
                    </ul>
                    <figure>
                        <img src={ require( "./shared-transactions.png" ) } alt="Simple equation showing the math of shared tranactions. When I owe, effective balance equals to bank balance minus the amount I owe which can be pending. And when I am owed, effective balance equals to bank balance minus the amount deducted plus the amount I am owed, which can be pending too." className="no-border" />
                        <figcaption>Fig. 3 - My attempt at explaining shared transactions</figcaption>
                    </figure>
               </div>
                <div className="content-block">
                    <h4>So, what is my "worth"?</h4>
                    <p>If you think of the effective balance as your worth, it will help understand the concept even better. Your worth is the sum of all of your money sources considering the pending shared transaction amounts too.</p>
                    <br />
                    <figure>
                        <img src={ require( "./brainstorm-03.jpg" ) } alt="Explanation of the concept of worth" className="no-border" />
                        <figcaption>Fig. 4 - What is Worth?<br/>ps Geo means money, a lame reference to a platformer game I dearly love, <a href="http://hollowknight.com/" rel="nofollow" target="_blank" tabIndex="-1" title="Hollow Knight | An atmospheric adventure through a surreal, bug-infested world">Hollow Knight</a></figcaption>
                    </figure>
                    <br />
                    <p>I had brainstormed before on the problem statement and had discovered new problems, ref. Fig. 5.</p>
                    <br />
                    <figure>
                        <img src={ require( "./brainstorm-01.jpg" ) } alt="Problem statement brainstorm done on a sketchbook" className="no-border" />
                        <figcaption>Fig. 5 - Finding the perfect budget management solution by focussing on the problem</figcaption>
                    </figure>
                    <br />
                    <h4 className="subtitle">Modular transactions</h4>
                    <p>It is like a second category for a transaction. This would allow a user to analyse their expenses cross-category. For example, one is going to a weekend trip and may spend on food, gas, lodging, etc. These transactions fall under different categories but they belong to one logical module which is "weekend trip". The user can now see if they exceeded the allocated budget of their short trip or not and plan better the next time.</p>
                    <br />
                    <h4 className="subtitle">Hidden transactions</h4>
                    <p>These are only for diligent budgeteer like me. A hidden transaction is the amount of money I owe which someone else paid. This amound is not deducted yet but will eventuallly when the debt is settled.</p>
                    <br />
                    <h4 className="subtitle">Transaction attributes</h4>
                    <p>Then I narrowed down the attributes associated with each transaction, ref. Fig. 6.</p>
                    <br />
                    <figure>
                        <img src={ require( "./brainstorm-02.jpg" ) } alt="Transaction attributes" className="no-border" />
                        <figcaption>Fig. 6 - Transaction attributes</figcaption>
                    </figure>
                </div>
                <div className="content-block">
                    <h4>Scenarios</h4>
                    <h4 className="subtitle">#1 Shared transaction (the user is owed)</h4>
                    <p>Let's assume one of the user's money sources has $ 1,000 available to spend and they paid an electricity bill of $ 75 for them and two of their roommates. Then,</p>
                    <br />
                    <div className="equation-block">
                        <p>Bank balance = <strong className="pivot">$ 1,000</strong></p>
                        <p>Electricity bill (actual deduction) = <strong className="pivot">$ 75</strong></p>
                        <br />
                        <p>Bank balance (after actual deduction) = <strong className="pivot">$ 1,000 - $ 75</strong></p>
                        <p>= <strong className="pivot">$ 925</strong></p>
                        <br />
                        <p>But, amount owed to the user = <strong className="pivot">$ 50</strong></p>
                        <p>So, effective bank balance (worth) = <strong className="pivot">$ 1,000 - $ 75 + <span className="green">$ 50</span></strong></p>
                        <p>= <strong className="pivot">$ 975</strong></p>
                    </div>
                    <br />
                    <h4 className="subtitle">#2 Shared transaction (the user owes)</h4>
                    <p>Let's start again with the initial balance of $ 1,000. Assume that one of the user's frieds paid for gas which they were supposed to share on a particular trip. Let this amount be $20. Then,</p>
                    <br />
                    <div className="equation-block">
                        <p>Bank balance = <strong className="pivot">$ 1,000</strong></p>
                        <p>Gas (split two ways) = <strong className="pivot">$ 20</strong></p>
                        <br />
                        <p>But, amount owed by the user = <strong className="pivot">$ 10</strong></p>
                        <p>So, effective bank balance (worth) = <strong className="pivot">$ 1,000 - <span className="red">$ 10</span></strong></p>
                        <p>= <strong className="pivot">$ 990</strong></p>
                    </div>
                    <br />
                    <h4 className="subtitle">#3 Credit Card bill</h4>
                    <p>Let's start again with the initial balance of $ 1,000. Assume that the user also has a credit card associated with this bank and this bill amounts to $ 60. Then,</p>
                    <br />
                    <div className="equation-block">
                        <p>Available bank balance = <strong className="pivot">$ 1,000</strong></p>
                        <p>Credit card bill (not paid yet) = <strong className="pivot">$ 60</strong></p>
                        <br />
                        <p>But, amount owed to bank = <strong className="pivot">$ 60</strong></p>
                        <p>So, available bank balance (worth) = <strong className="pivot">$ 1,000 - <span className="red">$ 60</span></strong></p>
                        <p>= <strong className="pivot">$ 940</strong></p>
                    </div>
                    <br />
                </div>
                <div className="content-block">
                    <h4>Competitive Analysis</h4>
                    <p>I limited my competitive analysis to just three other apps which I found were descently popular among the user base.</p>
                    <h4 className="subtitle">Mint by Intuit</h4>
                    <a href="https://play.google.com/store/apps/details?id=com.mint" rel="nofollow" target="_blank" tabIndex="-1" title="Mint: Budget, Bills, Finance">Google Play</a>
                    <div style={{ overflow: "hidden" }}>
                        <ul className="green" style={{ float: "left" }}>
                            <li>Polished UI</li>
                            <li>Integrates with various bank APIs</li>
                            <li>Categorized transactions</li>
                            <li>Sets up budget</li>
                            <li>Tax return support</li>
                        </ul>
                        <ul className="red" style={{ float: "left" }}>
                            <li>No modular transactions</li>
                            <li>No shared expenses</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <h4 className="subtitle">Wallet by BudgetBankers.com</h4>
                    <a href="https://play.google.com/store/apps/details?id=com.droid4you.application.wallet" rel="nofollow" target="_blank" tabIndex="-1" title="Wallet - Money, Budget, Finance Tracker, Bank Sync">Google Play</a>
                    <div style={{ overflow: "hidden" }}>
                        <ul className="green" style={{ float: "left" }}>
                            <li>Optional bank sync</li>
                            <li>Granular control on transactions</li>
                            <li>Consisten UI</li>
                        </ul>
                        <ul className="red" style={{ float: "left" }}>
                            <li>Manual budget creation</li>
                            <li>Premium features</li>
                            <li>No modular transactions</li>
                            <li>No shared expenses</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <h4 className="subtitle">Monefy</h4>
                    <a href="https://play.google.com/store/apps/details?id=com.monefy.app.lite" rel="nofollow" target="_blank" tabIndex="-1" title="Monefy - Money Manager">Google Play</a>
                    <div style={{ overflow: "hidden" }}>
                        <ul className="green" style={{ float: "left" }}>
                            <li>Intuitive and simple UI</li>
                            <li>Budget management</li>
                        </ul>
                        <ul className="red" style={{ float: "left" }}>
                            <li>No modular transactions</li>
                            <li>No shared expenses</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                </div>
                <div className="content-block">
                    <h4>Prototype</h4>
                    <p>This "web app" has 3 main components, which one can reach using the top nav.</p>
                    <ol>
                        <li>Transaction Exchange</li>
                        <li>Worth Overview</li>
                        <li>Settings</li>
                    </ol>
                    <a href="https://marvelapp.com/35e21i0" rel="nofollow" target="_blank" tabIndex="-1" title="Hi-fi prototype hosted on Marvel App">Open prototype in new tab</a>
                    <br />
                    <br />
                    <iframe src="https://marvelapp.com/35e21i0?emb=1" width="1440" height="1731" allowTransparency="true" frameborder="0" rel="nofollow"></iframe>
                </div>
                <div className="content-block">
                    <h4>Hallway Testing</h4>
                    <h4 className="subtitle">Round #1</h4>
                    <p>Task: To find whether they owed to someone or someone owed to them starting from the screen.</p>
                    <p>Feedback:</p>
                    <ul>
                        <li>The term "pending" is confusing as it seems it is referring to the pending bank deductions.</li>
                        <li>I thought the red and green colors signified whether I owed or I was owed.</li>
                    </ul>
                </div>
                <div className="content-block">
                    <h4>Coming Soon / Up Ahead</h4>
                    <p>I am planning to develop this application using React, Express and Mongo but not before iterating and incorporating feedback from the hallway tests.</p>
                </div>
            </div>
        );
    }
}