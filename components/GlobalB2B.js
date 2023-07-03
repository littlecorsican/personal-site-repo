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
                <li> Cooperate with product managers and back-end development engineers to complete requirements and continue to provide technical support for their responsible parts.</li>
                <li> In some cases, we need to use the front-end public component library to develop their own UI design and interaction design solutions.</li>
                <li> Keeping a constant focus on front-end related areas and solve related technical problems and issues.</li>
            </ul>
            <div className="company-headline">Stack</div>
            <ul>
                <li> Fontend : React/Next JS/Javascript </li>
                <li> Styling : SASS/LESS </li>
                <li> Other libraries : Antd </li>
            </ul>
            <div className="company-headline">Achievement</div>
            <ul>
                <li> Built new foreign language website ( Thailand ) from scratch that brings in additional 20k users. </li>
                <li> Built the company portal for EURO 2020. </li>
                <li> Improved and refactor the messy deposit page to comply with clean code standards. </li>
            </ul>
        </React.Fragment>
    )

}
