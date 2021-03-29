import React from 'react';
import userMan from '../../styles/img/userMan.svg';
import userWoman from '../../styles/img/userWoman.svg';


export const HomeSection1 = () => {
    return (
        <div className="home__section1">
            <div className="home__section1-title">
                Las personas prefieren InvenTI.com
            </div>
            <div className="home__section1-division">
                <div className="home__div-sec1">
                    <div className="home__guion">“</div>
                    <div className="home__opinion">InvenTI.com works really well with Google for a great SEO ranking. I can also embed YouTube videos, Google Maps, and other content easily and without any coding ability.</div>
                    <div  className="home__img-box">
                        <img src={userMan} className="home__opinion-img" />
                    </div>
                </div>
                <div className="home__div-sec1">
                <div className="home__guion">“</div>
                    <div className="home__opinion">InvenTI.com works really well with Google for a great SEO ranking. I can also embed YouTube videos, Google Maps, and other content easily and without any coding ability.</div>
                    <div className="home__img-box"><img src={userWoman} className="home__opinion-img" /></div>
                   
                </div>
               {/*  <div className="home__div-sec1">
                <div className="home__guion">“</div>
                    <div className="home__opinion">WordPress.com works really well with Google for a great SEO ranking. I can also embed YouTube videos, Google Maps, and other content easily and without any coding ability.</div>
                    <div>Imagen</div>
                  
                </div> */}
            </div>
        </div>
    )
}
