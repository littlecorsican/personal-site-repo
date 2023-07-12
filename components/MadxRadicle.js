import React, { useEffect, useRef, useState } from "react";


export default function GlobalB2b(props) {

    return (
        <React.Fragment>
            <style jsx global>
                {`

                `}
            </style>
            <div className="company-headline">Responsibilitites</div>
            <ul>
                <li> Build new website using in house framework and css library. </li>
            </ul>
            <div className="company-headline">Stack</div>
            <ul>
                <li> Programming Language : PHP/Javascript </li>
                <li> Styling : CSS </li>
            </ul>
            <div className="company-headline">Achievement</div>
            <ul>
                <li> Assist in setting up new cryptocurrency exchange site that went from $0.3 per coin to $146 in 6 months. </li>
                <li> Built the KYC page, metric page, graphing, promotion , deposit, withdrawal page of the exchange. </li>
            </ul>
        </React.Fragment>
    )

}
