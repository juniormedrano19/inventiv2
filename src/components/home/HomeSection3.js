import React from 'react';
import wave from '../../styles/img/wave.svg';
import waveBot from '../../styles/img/waveBot.svg';
import '../../styles/styles.css';
import CountUp from 'react-countup';

export const HomeSection3 = () => {
    return (
        <div className="home__section3-main">
<div>
            <img src={wave} />
            <div className="home__section3">
            <div className="home__section3-performance"><h2 className="home__section3-subtitle">Performance</h2></div>
           
           <div className="counter-prueba">
           <div class="counter-up">
    <div class="content">
      <div class="box">
        <div class="icon"><i class="fas fa-history"></i></div>
        <div class="counter">
          <CountUp
            end={1000}
            duration={10}
           
          />
        </div>
        <div class="text">Working Hours</div>
      </div>
      <div class="box">
        <div class="icon"><i class="fas fa-gift"></i></div>
        <div class="counter">
        <CountUp
            end={750}
            duration={10}
           
          />
        </div>
        <div class="text">Completed Projects</div>
      </div>
      <div class="box">
        <div class="icon"><i class="fas fa-users"></i></div>
        <div class="counter">
        <CountUp
            end={486}
            duration={10}
           
          />
        </div>
        <div class="text">Happy Clients</div>
      </div>
      <div class="box">
        <div class="icon"><i class="fas fa-award"></i></div>
        <div class="counter">
        <CountUp
            end={150}
            duration={10}
           
          />
        </div>
        <div class="text">Awards Received</div>
      </div>
    </div>
  </div>
           </div>
        </div>
        
        </div>
        <img src={waveBot} />
        </div>
        
        
    )
}
