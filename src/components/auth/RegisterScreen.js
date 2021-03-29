import React from 'react';
import {Link} from 'react-router-dom';
import pc4 from '../../styles/img/pc4.jpg';
import logo from '../../styles/img/logo.png';

export const RegisterScreen = () => {
    return (
        <div className="auth__main-register">
            <div className="auth__main-register-principal">

            <div  className="auth__box-container-register">
            <form>
            <div /* className="auth__logo" */>
       
       <div><img src={logo} width="65px" height="60px"  className="auth__logo-register"/></div>
 
       </div>

<h3 className="auth__title-logo-register1">InvenTI v2</h3>
        <div className="auth__margin">
        {/* Name */}
        <div className="input-field-reg">
                   <i className="fas fa-user i"></i>
               <input
                /* className="auth__input" */
                type="text"
                placeholder="Enter your Name"
                autoComplete="off"
                />
               </div>
                 {/* LastName */}
               <div className="input-field-reg">
                   <i className="fas fa-user i"></i>
               <input
                /* className="auth__input" */
                type="text"
                placeholder="Enter your Lastname"
                autoComplete="off"
                />
                {/* Email */}
               </div>
               <div className="input-field-reg">
               <i class="fas fa-envelope"></i>
               <input
                /* className="auth__input" */
                type="text"
                placeholder="you@example.com"
                autoComplete="off"
                />
               </div>
                {/* Pass */}
               <div className="input-field-reg ">
                <i className="fas fa-lock i"></i>
                <input
                   /*  className="auth__input" */
                   type="password"
                   placeholder="Enter you password"
                   autoComplete="off"
                />
                 <i className="fas fa-eye"></i>
                </div>
                {/* Confirm Pass */}
                <div className="input-field-reg ">
                <i className="fas fa-lock i"></i>
                <input
                   /*  className="auth__input" */
                   type="password"
                   placeholder="Confirm your password"
                   autoComplete="off"
                />
                 <i className="fas fa-eye"></i>
                </div>
                </div>
                <input type="checkbox" id="cbox" value="checkbox" /> <span className="auth__checkbox">Acepto los términos y condiciones de la política de Protección de Datos.</span>
                {/* <br/><span>CAPTCHA</span> */}
                <button
                className="auth__login-button-reg"
                >
                    REGISTRARSE
                </button>
                <div className="auth__forget auth__space">
                <span>¿Ya te haz registrado?</span>

                </div>
              
                <Link 
                to="/auth/login"
                className="link auth_link"
                >
                   Iniciar Sesión
                </Link>

            </form>
            </div>
            </div>
            <div className="auth__img">
                {/* <h1>IMAGEN ALUSIVA</h1> */}
               {/*  <img src={pc4} /> */}
            </div>
        </div>
    )
}
