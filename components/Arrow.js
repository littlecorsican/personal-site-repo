import React, { useEffect, useRef, useState } from "react";


export default function ArrowIcon(props) {

    const [arrowClassName, setArrowClassName] = useState("arrow arrow-up")

    const arrowRef = useRef();

    const toggle=()=>{
        console.log(arrowRef.current, props.divRef.current)
        if (arrowRef.current.className == "arrow arrow-up") {
            //arrowRef.current.className = "arrow arrow-down"
            setArrowClassName("arrow arrow-down")
            props.setDivClassName("showEaseAnimation")
        } else {
            //arrowRef.current.className = "arrow arrow-up"
            setArrowClassName("arrow arrow-up")
            props.setDivClassName("hiddenEaseAnimation")
        }
    }

    return (
        <div className={arrowClassName} style={{padding:"0"}} onClick={toggle} ref={arrowRef}></div>
    )

}
