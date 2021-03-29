import React from 'react';
import dashboard from '../../styles/img/dashboard.svg';
import code1 from '../../styles/img/code1.svg';
import world from '../../styles/img/world.svg';
import source from '../../styles/img/source.svg';
import {Link} from 'react-router-dom';

export const HomePortada = () => {
    return (
        <div>
            <div className="home__portada">
                <div className="home__portada-margin">
                <div className="home__portada-text">
                <h2 className="home__portada-title">Descubre lo simple que es innovar a través de la Tecnología. </h2>
                <p className="home__portada-content">InvenTI es una plataforma que realiza automatizaciones y procesos generando simplicidad y ganas de conocer más sobre la Tecnología y permitiendo interactuar con emprendedores de este fabuloso mundo.</p>
                <div className="home__portada-buttons">
               <ul className="home__buttons-port">
                
               <Link to="/auth/login" className="home__link-header-in"> <li className="home__buttons-log home__in home_primary">Read More</li></Link>
               <Link to="/auth/register" className="home__link-header-up">  <li className="home__buttons-log home__up port_up home_secondary">Sign up</li></Link>
            
              </ul>
               </div>
                   </div>
                   <div className="home__portada-img">
                      
                   <img src={world} className="home__svg" alt="" />
                   </div>
                </div>
             
            </div>
            {/* <h1>Portada</h1> */}
        </div>
    )
}
