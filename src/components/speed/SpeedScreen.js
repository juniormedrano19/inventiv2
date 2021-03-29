import React from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  // Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../speed/AnimatedProgressProvider";
/* import ChangingProgressProvider from "./ChangingProgressProvider"; */



export const SpeedScreen = () => {
    return (
        <div className="speed">
        <div className="speed__test">
            <div className="speed__test-principal"></div>
            <div className="speed__test-prueba">
                <div className="speed__test-box ">
                <AnimatedProgressProvider
        valueStart={0}
        valueEnd={80}
        duration={1.4}
        /* strokeWidth={50} */
        easingFunction={easeQuadInOut}
        repeat
       /*  className="speed__animate" */
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <div className="speed__animate">
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
            />
               </div>
          );
        }}
      </AnimatedProgressProvider>
                </div>
                <div className="speed__test-box" >
                <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        /* strokeWidth={50} */
        easingFunction={easeQuadInOut}
        repeat
       /*  className="speed__animate" */
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <div className="speed__animate">
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
            />
               </div>
          );
        }}
      </AnimatedProgressProvider>
                </div>
                <div className="speed-prueba" ></div>
            </div>
        </div>
     
    
   
        </div>
    )
}
