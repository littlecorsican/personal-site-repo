import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import DropDown from '@component/components/DropDown.js'
import LinkedInIcon from '@component/components/LinkedInIcon.js'
import GitHubIcon from '@component/components/GitHubIcon.js'
import PhoneIcon from '@component/components/PhoneIcon.js'
import AddressIcon from '@component/components/AddressIcon.js'
import EmailIcon from '@component/components/EmailIcon.js'
import StarsRating from 'stars-rating'

export default function Resume() {

    const [deg, setDeg] = useState(0);
    const [y, setY] = useState(0);
    const [x, setX] = useState(0);
    const [height , setHeight] = useState("100vh")
    const [mouseDown, setMouseDown] = useState(false);
    const rotateRef = useRef()
    const myRef = useRef()
    const sc2DogTagRef = useRef()



    const handleDrag=(e)=>{
        //console.log("X: " + e.clientX + " | Y: " + e.clientY)
        setDeg(e.clientX/3)
        console.log(deg)
    }

    const endDrag=(e)=>{
        console.log("enddrag", deg)
        setDeg(deg)
    }

    const handleScroll=(e)=>{
        console.log("sdfad")
    }

    const handleMouseDown =(e)=>{
        setMouseDown(true)
        e = e || window.event;
        let isRightMB;

        if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = e.which == 3; 
        else if ("button" in e)  // IE, Opera 
            isRightMB = e.button == 2; 

        console.log(isRightMB)
    }

    const handleMouseUp=(e)=>{
        setMouseDown(false)
    }

    const handleMouseMove=(e)=>{
        if (mouseDown) {
            console.log("move" , e.clientX, e.clientY)
            //setDeg(e.clientX/3)
            setX(e.clientX/3)
            setY(e.clientY/3)
        }
        
    }

    const adjustBackgroundOverlayHeight=(add)=>{
        // let endHeight = sc2DogTagRef.current.clientHeight 
        // console.log(endHeight, add)
        // if (add) {
        //     endHeight += 500
        // } else {
        //     endHeight -= 500
        // }
        // console.log(endHeight)
        // setHeight(endHeight)

    }

    React.useEffect(() => {
        function handleResize() {
          console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
          console.log(window.innerWidth < 700)
          if (window.innerWidth < 700) {
            setHeight(window.innerHeight + 914)
          } else {
            setHeight(window.innerHeight)
          }
        }
    
        window.addEventListener('resize', handleResize)
      })

    return (
        <React.Fragment>
            <div className="sc2-dog-tag flex-box" 
                //style={{transform: `rotate3d(0, 1, 0, ${deg}deg)` , left : `${x}px` ,top : `${y}px` }} 
                // onDragStart={handleDrag} 
                // onDragEnd={endDrag} 
                // onWheel={handleScroll} 
                // ref={myRef}
                // onMouseDown={handleMouseDown}
                // onMouseUp={handleMouseUp}
                // onMouseMove={handleMouseMove}
                ref={sc2DogTagRef}
            >
                
                <div className="left padding2rem">
                    <div className="padding2rem">
                        <h1>Contact</h1>
                    </div>
                    <div className="underline"></div>
                    <ul style={{   textAlign: "left" }}>
                        <li><EmailIcon /> <a href="mailto:gnomemage1990@gmail.com">gnomemage1990@gmail.com</a> </li>
                        <li><LinkedInIcon /> <a href="https://www.linkedin.com/in/yuxiang-c-054aba92/">https://www.linkedin.com/in/yuxiang-c-054aba92/</a> </li>
                        <li><GitHubIcon /> <a href="https://github.com/yxchanSNsoft">https://github.com/yxchanSNsoft</a> </li>
                        <li><GitHubIcon /> <a href="https://github.com/littlecorsican">https://github.com/littlecorsican</a> </li>
                        <li><PhoneIcon /> 011-36429814 </li>
                        <li><AddressIcon /> Kuala Lumpur, Malaysia </li>
                    </ul>
                    <div className="padding2rem">
                        <h1> Skills </h1>
                    </div>
                    <div className="underline"></div>
                    <ul style={{   textAlign: "left" }}>
                        <li> Javascript : <StarsRating count={5} size={24} color2={'#ffd700'} value={5} edit={false} /> </li>
                        <li> PHP : <StarsRating count={5} size={24} color2={'#ffd700'} value={4} edit={false} /> </li>
                        <li> Python : <StarsRating count={5} size={24} color2={'#ffd700'} value={5} edit={false} /> </li>
                        <li> HTML : <StarsRating count={5} size={24} color2={'#ffd700'} value={5} edit={false} /> </li>
                        <li> CSS : <StarsRating count={5} size={24} color2={'#ffd700'} value={4} edit={false} /> </li>
                        <li> React : <StarsRating count={5} size={24} color2={'#ffd700'} value={4} edit={false} /> </li>
                        <li> Flask : <StarsRating count={5} size={24} color2={'#ffd700'} value={4} edit={false} /> </li>
                        <li> Laravel : <StarsRating count={5} size={24} color2={'#ffd700'} value={2} edit={false} /> </li>
                    </ul>
                </div>
                <div className='right'>
                    <div className="padding2rem" style={{ fontSize:"42px" }}>
                        <h1>Chan Yu-Xiang</h1>
                    </div>
                    <div style={{ padding:"0" }}>Software engineer with good aptitude and proficiency in frontend, backend development, embedded systems and database.</div>
                    <div className="upperline">
                        <div className="upperline1"></div>
                        <div className="upperline2"></div>
                        <div className="upperline3"></div>
                    </div>

                    <div className="padding2rem">
                        <h1>Work experience</h1>
                        <DropDown title="ExxonMobil (April 2022 - Present)" adjustBackgroundOverlayHeight={adjustBackgroundOverlayHeight} content="exxon" />
                        <DropDown title="Global B2B Consultancy (Sept 2020 - April 2022)" adjustBackgroundOverlayHeight={adjustBackgroundOverlayHeight} content="globalb2b" />
                        <DropDown title="Madx Radicle Sdn Bhd ( March 2020 - Sep 2020 )" adjustBackgroundOverlayHeight={adjustBackgroundOverlayHeight} content="madxradicle"  />
                        <DropDown title="AIA Shared Services ( May 2015 - Dec 2019 )" adjustBackgroundOverlayHeight={adjustBackgroundOverlayHeight} content="aia"  />
                    </div>
                    <div className="underline"></div>

                    <div className="padding2rem">
                        <h1>Education</h1>
                        <div className="company-headline">University of East London (2012-2014) Bsc Biochemistry</div>
                        <div className="company-headline">Tunku Abdul Rahman College (2009-2012) Diploma in Biology and Chemistry</div>
                    </div>
                    <div className="underline"></div>
                </div>
                <div className="background-overlay" style={{ height : "100%", width : "110%" }}></div> 
            </div>
            
        </React.Fragment>
    )

}
