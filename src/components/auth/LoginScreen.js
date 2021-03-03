import React from 'react';
import {Link} from 'react-router-dom';
import microsoft_icon from '../../styles/img/microsoft_icon.svg'

export const LoginScreen = () => {
    return (
        <div className="auth__main">
       
        <form className="auth__box-container">
        <div className="auth__logo"></div>
        <h3 className="auth__title-logo">LOGO</h3>
         
                <label className="auth__label">Email</label>
                <input
                className="auth__input"

                />
         
            
                <label className="auth__label">Contraseña</label>
                <input
                    className="auth__input"
                />
           
            <button
            className="btn btn-primary btn-block"
            >
            INICIAR SESIÓN
        </button>
        <div className="auth__forget">
        <p>¿Olvidaste tu contraseña?</p>
        </div>
        
       
       
        <div className="auth__social-networks">
        <p>Iniciar Sesión con Redes Sociales</p>
        </div>
       
        <div className="auth__social-main" >
            <div className="auth__social facebook"><i class="fab fa-facebook-f"></i></div>
            <div className="auth__social twitter"> <i class="fab fa-twitter"></i></div>
            <div className="auth__social apple"><i class="fab fa-apple"></i></div>
            <div className="auth__social microsoft"><img src={microsoft_icon} className="auth__img-social" alt="" /></div>
            <div className="auth__social google"><i class="fab fa-google"></i></div>
            
        </div>
        <div className="auth__forget auth__space">
        <span>¿Aún no te haz registrado?</span>
        </div>
         <Link 
                to="/auth/register"
                className="link auth_link"
                >
                    Registrarse
                </Link>
        </form>
      
        </div>
    )
}
