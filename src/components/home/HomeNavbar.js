import React, {useState} from 'react';
import logo from '../../styles/img/logo.png';
import LunarToggle from 'react-lunar-toggle';
import {Link} from 'react-router-dom'

export const HomeNavbar = () => {
    const [darkMode, toggleDarkMode] = useState(false)
    return (
        <div>
            <div className="home__nav-container">
                <div className="home__nav-container-second">
                    <div className="home__nav-container-logo">
                    <div><img src={logo} width="65px" height="60px" /></div>
                <div>InvenTI v2</div>
                    </div>
          <div className="home__nav-container-routes">
              <ul className="home__nav-container-link">
                  <li className="home__nav-item home__inicial-nav">¿Por qué InvenTI?</li>
                  <li className="home__nav-item">Inicio</li>
                  <li className="home__nav-item">Contacto</li>
                  <li className="home__nav-item">Servicios</li>
              </ul>
          </div>
          <div className="home__nav-container-icons">
               <div>
               <LunarToggle
      checked={darkMode}
      onChange={(e) => toggleDarkMode(e.target.checked)}
    />
               </div>
               
               </div>
               <div className="home__nav-container-buttons">
               <ul className="home__buttons">
                
               <Link to="/auth/login" className="home__link-header-in"> <li className="home__buttons-log home__in">Sign in</li></Link>
               <Link to="/auth/register" className="home__link-header-up">  <li className="home__buttons-log home__up">Sign up</li></Link>
            
              </ul>
               </div>
               
                </div>
                
            </div>
            {/* <h1>Navbar</h1> */}
        </div>
    )
}
