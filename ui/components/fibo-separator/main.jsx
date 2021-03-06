// Import dependencies:
import React from "react";

// Import styles:
import "./style.scss";


export default class FibonacciSeparator extends React.Component {
    render() {
        let start = 1;
        let itemsInSeries = 10;
        let itemsToSkip = 4;

        let prev = 0;
        let next = start;
        let curr = 0;

        let counter = itemsInSeries;
        let fibNumbers = [];

        while( counter > 1 ) {
            curr = prev + next;
            prev = next;
            next = curr;
            counter--;
            if( --itemsToSkip > 0 ) continue;
            fibNumbers.push( curr );
        }

        let dupItems = fibNumbers.slice( 0, fibNumbers.length - 1 ).reverse();
        fibNumbers = fibNumbers.concat( dupItems );

        return (
            <div className="fibo-separator">
                { fibNumbers.map( ( x, idx ) => {
                    return <div className={ "item" + ( idx < itemsInSeries / 2 ? " item--first-half" : "" ) } style={{ width: `${ x }px` }} key={ "item-" + idx } />;
                }) }
            </div>
        );
    }
}