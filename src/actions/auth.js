import { types } from "../types/types";
import {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    appleAuthProvider,
    microsoftAuthProvider,
    firebase
  
  } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";


  export const startLoginEmailPassword=( email, password )=>{

    return (dispatch)=>{
       

        dispatch(startLoading());

        //Loguearme con correo y contraseña usando signInWithEmailAndPassword
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user})=>{
            dispatch(finishLoading());
            console.log(user);
            dispatch(login(user.uid,user.displayName));
         
        })
        .catch(e=>{
            console.log(e);
            dispatch(finishLoading());
            
        })
    }

}


  export const signInLoginGoogle = ()=>{
      return (dispatch)=>{
          firebase.auth().signInWithPopup(googleAuthProvider)
           .then(({user})=>{
               dispatch(login(user.uid, user.displayName))
            console.log(`Bienvenido ${user.displayName} con ${user.uid} a InvenTI v2`);
        })
      }
  }

  export const signInLoginFacebook = ()=>{
      return (dispatch)=>{
          firebase.auth().signInWithPopup(facebookAuthProvider)
          .then(({user})=>{
              dispatch(login(user.uid, user.displayName))
              console.log(`Bienvenido ${user.displayName} con ${user.uid} a InvenTI v2`)
          })
      }
  }

  export const signInLoginTwitter = ()=>{
      return (dispatch) => {
          firebase.auth().signInWithPopup(twitterAuthProvider)
          .then(({user})=>{
              dispatch(login(user.uid, user.displayName))
              console.log(`Bienvenido ${user.displayName} con ${user.uid} a InvenTI v2`)
          })
      }
  }


  



export const login = (uid, name)=>({
    type:types.login,
    payload:{
        uid, name
    }
})

export const startLogout=()=>{

    return async (dispatch) => {

       await firebase.auth().signOut();

       dispatch(logout());
      

    }


}

export const logout=()=>({
    type: types.logout,

})