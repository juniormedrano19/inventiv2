import React from 'react';
import Loader from 'react-loader-spinner'; 
import  code  from '../../styles/img/code.svg'

export const LoadScreen = () => {
    return (
        <div className="auth__load-screen">
            
            <img src={code} className="auth__img-load" alt="" />
          
         <div   className="auth__loader">
         <Loader
    
         type="Oval"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={40000} 
 
      />
         </div>
         
            
        

            <div
              className="loader__main"
             >InvenTIv2</div>

        </div>
    )
}
