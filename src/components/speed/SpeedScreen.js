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
            <div className="speed__test-principal">
              <div className="speed__test-orden">
                <div className="speed__test-elemento1">
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
                <div className="speed__test-elemento">
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
                <div className="speed__test-elemento">
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
              </div>
              <div className="speed__test-previous">

                <div className="speed__test-previousText">
                  Descarga: 124 Mbps | Carga: 150 Mbps
                </div>

              </div>
              
            </div>
            <div className="speed__test-prueba">
                <div className="speed__test-box ">
                <h1 className="speed__testfont ">Resultados</h1>
                <p className="speed__testParagraph ">Revisa tus resultados diarios, mensuales, etc.</p>
                </div>
                <div className="speed__test-box" >
                <h1 className="speed__testfont ">Gráficas</h1>
                <p className="speed__testParagraph ">Analiza y verifica las gráficas de todos tus test</p>
                </div>
                <div className="speed-prueba" ></div>
            </div>
        </div>
     
    
   
        </div>
    )
}
