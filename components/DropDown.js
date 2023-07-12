import Head from 'next/head'
import Image from 'next/image'
import styles from '@component/styles/Home.module.css'
import React, { createRef  } from "react";
import Arrow from '@component/components/Arrow.js'
import Exxon from '@component/components/Exxon.js'
import GlobalB2b from '@component/components/GlobalB2b.js'
import MadxRadicle from '@component/components/MadxRadicle.js'
import AIA from '@component/components/AIA.js'

const componentOf = {
	exxon: <Exxon/>,
  globalb2b : <GlobalB2b />,
  madxradicle : <MadxRadicle />,
  aia : <AIA />,
};

const DynamicComponent =(props)=> {
  console.log(props.componentName)
  return componentOf[props.componentName]
}

export default class DropDown extends React.Component {
    constructor() {
      super();
      this.state = {
        divClassName : "hiddenEaseAnimation"
      };
    }

    divRef = createRef();

    setDivClassName=(e)=>{
      console.log(e)
      if (e == "hiddenEaseAnimation") {
        this.props.adjustBackgroundOverlayHeight(false)
      } else {
        this.props.adjustBackgroundOverlayHeight(true)
        console.log("setDivClassName", window.outerHeight)
      }
      
      this.setState({
        divClassName : e
      })
    }
    
    render() {

      const headerStyle = {textAlign : 'left' , fontSize:'23px' , padding:"1rem" }

      return (
        <div>
          <div style={headerStyle}><Arrow divRef={this.divRef}  setDivClassName={this.setDivClassName} />{this.props.title}</div>
          <div className={this.state.divClassName} ref={this.divRef} >
            <DynamicComponent componentName={this.props.content} />
          </div>
        </div>
      )
    }
  }