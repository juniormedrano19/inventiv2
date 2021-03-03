import React from 'react';
import {Link} from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div className="auth__main-register">
            <form className="auth__box-container">
            <div className="auth__img-logo">
            <div className="auth__logo-circle"></div>
        <h3 className="auth__title-logo-register">LOGO</h3>
        </div>
        <div className="auth__margin">
                <label className="auth__label">Nombres</label>
                <input
                    className="auth__input"
                    
                />
                <label className="auth__label">Apellidos</label>
                <input
                    className="auth__input"
                />
                <label className="auth__label">Email</label>
                <input
                    className="auth__input"
                />
                <label className="auth__label">Contraseña</label>
                <input
                    className="auth__input"
                />
                <label className="auth__label">Repetir Contraseña</label>
                <input
                    className="auth__input"
                />
                </div>
                <input type="checkbox" id="cbox" value="checkbox" /> <span className="auth__checkbox">Acepto los términos y condiciones de la política de Protección de Datos</span>
                {/* <br/><span>CAPTCHA</span> */}
                <button
                className="btn btn-primary btn-block mb-5 mt-1"
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
            <div className="auth__img">
                <h1>IMAGEN ALUSIVA</h1>
            </div>
        </div>
    )
}
