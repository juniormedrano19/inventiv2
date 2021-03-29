import React from 'react';
import {Link} from 'react-router-dom';
import microsoft_icon from '../../styles/img/microsoft_icon.svg';
import logo from '../../styles/img/logo.png';
import {useDispatch, useSelector} from 'react-redux'
import { signInLoginFacebook, signInLoginGoogle, signInLoginTwitter, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    
    const dispatch = useDispatch();
    const {loading} = useSelector( state => state.ui );

    const [values, handleInputChange] = useForm({
            email:'',
            password:'',
    })

    const {email, password} = values;

    const handleLogin= (e) =>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin=()=>{
        dispatch(signInLoginGoogle());
    }

    const handleFacebookLogin = ()=>{
        dispatch(signInLoginFacebook());
    }

    const handleTwitterLogin= ()=>{
        dispatch(signInLoginTwitter());
    }


    return (
        <div className="auth__main">
       <div /* className="auth__box-container" */ className="auth__box-principal">
       <div className="auth__box-principal-main">
           <div className="auth__box-principal-logo">
               InvenTI v2
           </div>
           <div className="auth__box-principal-text">
               Descubre el mundo de las nuevas TI, & sé parte de ellos.
           </div>
       </div>

        </div>
        <div className="auth__box-secondary">
            <div className="auth__box-container">
        <form onSubmit={handleLogin}>
        <div /* className="auth__logo" */>
       
                    <div><img src={logo} width="65px" height="60px"  className="auth__logo"/></div>
              
                    </div>
       
        <h3 className="auth__title-logo">InvenTI v2</h3>
         
               <div className="input-field">
                   <i className="fas fa-user i"></i>
               <input
                /* className="auth__input" */
                type="text"
                placeholder="you@example.com"
                autoComplete="off"
                name="email"
                value={email}
                onChange={handleInputChange}
                />
               </div>
               

                <div className="input-field ">
                <i className="fas fa-lock i"></i>
                <input
                   /*  className="auth__input" */
                   type="password"
                   placeholder="Enter you password"
                   autoComplete="off"
                   name="password"
                   value={password}
                   onChange={handleInputChange}
                />
                 <i className="fas fa-eye"></i>
                </div>
                
           
            <button
             type="submit" 
            className="auth__login-button"
            /* className="btn btn-primary btn-block" */
            disabled={loading}
            >
            Iniciar Sesión
        </button>
        <div className="auth__forget">
        <p>¿Olvidaste tu contraseña?</p>
        </div>
        
       
       
        <div className="auth__social-networks">
        <p>Iniciar Sesión con Redes Sociales</p>
        </div>
       
        <div className="auth__social-main" >
            <div className="auth__social facebook" onClick={handleFacebookLogin}><i class="fab fa-facebook-f"></i></div>
            <div className="auth__social twitter" onClick={handleTwitterLogin}> <i class="fab fa-twitter"></i></div>
            <div className="auth__social apple"><i class="fab fa-apple"></i></div>
            <div className="auth__social microsoft"><img src={microsoft_icon} className="auth__img-social" alt="" /></div>
            <div className="auth__social google"
            onClick={handleGoogleLogin}
            ><i class="fab fa-google"></i></div>
            
        </div>
        <div className="auth__forget-reg auth__space">
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
        </div>
        
        </div>
    )
}
