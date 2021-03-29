import React from 'react'

export const HomeFooter = () => {
    return (
        <div>
            {/* <h1>Footer</h1> */}

            <div className="home__footer">
            <div className="home__social-title">
            <div className="home__marca">InvenTI v2</div>
                <div className=" home__logo" >
                <i class="fas fa-laptop-code"></i>
                </div>
    
           
            </div>
            <div className="home__social-terms">
                <div className="home__list">
                    <ul className="home__item">
                        <li className="home__item-principal home__item-margin">Company</li>
                        <li className="home__item-margin home__hover">Home</li>
                        <li className="home__item-margin home__hover">About us</li>
                     
                        <li className="home__item-margin home__hover">Frecuently Asked Questions</li>
                        <li className="home__item-margin home__hover">Terms & Conditions</li>
                    
                    </ul>
                </div>
                <div className="home__list">
                <ul className="home__item">
                        <li className="home__item-principal ">Support</li>
                        <li className="home__item-margin home__hover">Contact us</li>
                        <li className="home__item-margin home__hover">Login</li>
                        <li className="home__item-margin home__hover">Pricing</li>
                        <li className="home__item-margin home__hover">Help Center</li>
                    </ul>
                </div>
                <div className="home__list">
                <ul className="home__item">
                        <li className="home__item-principal">Account</li>
                        <li className="home__item-margin home__hover">Join Now</li>
                        <li className="home__item-margin home__hover">Login</li>
                        <li className="home__item-margin home__hover">Contributor FAQ</li>
                        <li className="home__item-margin home__hover">Cookie Settings</li>
                        
                    </ul>
                </div>
            </div>
            <div className="home__social-main">
               <div className="home__social home__linkedin"><a href="https://www.linkedin.com/" target="_blank" className="home__link"><i class="fab fa-linkedin-in"></i></a></div>
               <div className="home__social home__facebook"><a href="https://www.facebook.com/" target="_blank" className="home__link"><i class="fab fa-facebook-f"></i></a></div>
               <div className="home__social home__twitter" ><a href="https://twitter.com/login" target="_blank" className="home__link" ><i class="fab fa-twitter"></i></a></div>
               <div className="home__social home__instagram" ><a href="https://www.instagram.com/" target="_blank" className="home__link" ><i class="fab fa-instagram"></i></a></div>
            </div>
           
            </div>
            <div className="home__footer-copyright">
            © InvenTI.com 2021. All Rights Reserved.
            </div>
        </div>
    )
}
