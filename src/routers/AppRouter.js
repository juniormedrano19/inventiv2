import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

  } from "react-router-dom";
  import { firebase } from '../firebase/firebase-config';
import Loader from 'react-loader-spinner';
import { HomeScreen } from '../components/home/HomeScreen';
import { InventiPrincipal } from '../components/inventi/InventiPrincipal';
import { InventiScreen } from '../components/inventi/InventiScreen';
import { LoadScreen } from '../components/load/LoadScreen';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { login } from '../actions/auth';
import { HomeSection6 } from '../components/home/HomeSection6';


export const AppRouter = () => {
  const dispatch = useDispatch();

const [checking, setChecking] = useState(true);

const [isLoggedIn, setisLoggedIn] = useState(false)




  //Mantener el estado de la autenticación
//cuando la autenticación cambia ejecuto un proceso de firebase
  useEffect(() => {
    //ESTO SE CREA UN OBSERVABLE, OBJETO ESPECIAL QUE SE EJECUTA MAS DE UNA VEZ, CUANDO ME LOGUEO CUANDO CAMBIO DE USUARIO
    firebase.auth().onAuthStateChanged( (user)=>{
      /* console.log(user); */
      //esto pregunta si el objeto user tiene algo, entonces pregunta si existe el uid, si es null se sale de 
      //ciclo if
      if(user?.uid){
          dispatch(login(user.uid, user.displayName));// mantiene el estado
          setisLoggedIn(true); //ya está autenticado

        /*  dispatch(startLoadingNotes(user.uid)); */
      }else{
        setisLoggedIn(false); //deslogueado
      }
      setChecking(false);//se pone después de cargar 



    }) 
  }, [dispatch, setChecking, setisLoggedIn]) //solo se ejecuta una vez



  if(checking){
    return(
      //Modificar con un spinner
  /*     <h1>Espere ...</h1> */
      <LoadScreen />
    )
  }












    return (
        <Router>
      <div>
        
        <Switch>
        <PublicRoute 
        exact 
        path="/home" 
        component={HomeScreen} 
        isAuthenticated={isLoggedIn}
        /> 
        {/*  <PublicRoute 
        exact 
        path="/home/contacto" 
        component={HomeSection6} 
        isAuthenticated={isLoggedIn}
        />  */}
        <PublicRoute 
         path="/auth" 
         component={AuthRouter}
         isAuthenticated={isLoggedIn}
         />
        <PrivateRoute
         exact 
         path="/" 
         component={InventiPrincipal}
         isAuthenticated={isLoggedIn}
         />
         
         {/*  <Route exact path="/carga" component={LoadScreen} />  */}
        
          {/* screen de la carga es momentaneo */}

          <Redirect to="/home" />
        
        </Switch>
      </div>
    </Router>
    )
}
