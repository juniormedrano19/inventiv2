import React from 'react';


export const HomeSection6 = () => {
    return (
        <div className="home__section6">
            <div className="home__section6-info">

                <div className="home__section6-infoti">
                    <div ><h1 className="home__section6-tit">Contacto</h1></div>
                    <div className="home__section6-subtit">¿Quieres comunicarte con nosotros?</div>
                    <div className="home__section6-contenido">Siempre estamos abiertos y dispuestos a brindarte el mejor servicio y a solventar tus dudas. Escríbenos.</div>
                    <div><p  className="home__section6-campo">Correo</p></div>
                    <div ><p className="home__section6-answer home__section6-space">contact@inventi.com</p></div>
                    <div ><p className="home__section6-campo">Teléfono</p></div>
                    <div ><p className="home__section6-answer">+51 958810418</p></div>

                </div>

            </div>
            <div className="home__section6-contacto">
                <div  className="home__section6-second" >
            <section >
            <div className="home__section6-center">
            <h1 className="home__section6-contactame">Contáctanos</h1>
            <p className="home__section6-content">Rellene el siguiente formulario para enviar un mensaje.</p>
            </div>
        <div >
            <form className="home__section6-formulario">
                <div className="home__section6-form">
                    <label for="name" className="home__section6-label" >Nombre Completo</label>
                    <input type="text" name="name" id="name" placeholder="John Torres" required="required" className="home__section6-input"  />
                </div>
                <div className="home__section6-form">
                    <label for="email" className="home__section6-label" >Correo Electrónico</label>
                    <input type="email" name="email" id="email" placeholder="ejemplo@tuempresa.com" required="required" className="home__section6-input"  />
                </div>
                <div className="home__section6-form">

                    <label for="phone" className="home__section6-label" >Teléfono</label>
                    <input type="text" name="phone" id="phone" placeholder="+51 956632231" required="required" className="home__section6-input" />
                </div>
                <div className="home__section6-form">
                    <label for="message" className="home__section6-label">Mensaje</label>

                    <textarea rows="5" name="message" id="message" placeholder="Ingresa tu mensaje aquí" required="required" className="home__section6-area"></textarea>
                </div>
                <div className="home__section6-form">
                    <button type="submit" className="home__section6-button" >Enviar Mensaje</button>
                </div>
                <p  id="result">
                </p>
            </form>
        </div>
   
</section>
</div>
            </div>
            
        </div>
    )
}
