import React, { useEffect, useRef, useState } from "react";


export default function Exxon(props) {

    return (
        <React.Fragment>
            <style jsx global>
                {`

                `}
            </style>
            <div className="company-headline">Responsibilitites</div>
            <ul>
                <li> Develop, improve and maintain the application code, its pipeline and automated scripts.  </li>
                <li> Participate in agile meeting , provide feedback and constructive suggestions for all matters related to features and user stories. </li>
                <li> Provide troubleshoot and support to users, present latest changes and technical support to users every month. </li> 
            </ul>
            <div className="company-headline">Stack</div>
            <ul>
                <li> Backend : Flask/FastAPI/Python </li>
                <li> Frontend : React/Javascript </li>
                <li> Database : Microsoft SQL </li>
                <li> Automation : Ansible / Yaml / Powershell </li>
                <li> Devops : Powershell </li>
                <li> Others : ServiceNow</li>
            </ul>
            <div className="company-headline">Achievement</div>
            <ul>
                <li> Created logging output for application and automated scripts and feed it to datadog dashboard, saving an estimate  </li>
                <li> Created function for users to map relationships using excel files.  </li>
                <li> Scaled application horizontally by enabling SQL replication on a publisher , distributor and multiple subscribers. Code changes was made so that backend will point to the nearest geolocation to the user. </li>
                <li> Improved UI of the application. </li>
                <li> Provided technical support to other non-dev team for their own quick access website </li>
            </ul>
        </React.Fragment>
    )

}
