import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";
  import {TicketRouter} from '../../routers/TicketRouter'
import { SpeedScreen } from '../speed/SpeedScreen';
import { TicketCampagna } from './TicketCampagna';
import { TicketComparative } from './TicketComparative';
import { TicketGraph } from './TicketGraph';
import { TicketPrediction } from './TicketPrediction';
import { TicketReporte } from './TicketReporte';


export const TicketScreen = () => {
    return (
        <div className="ticket__principal">
            <div className="ticket__secondary">
                <div className="speed__test-prueba">
                <div className="speed__test-box ">
                <h1 className="ticket__testfont ">Datos Personales</h1>
               {/*  <form>
                    <label>Nombres y Apellidos(*)</label><br/>
                    <input/><br/>
                    <label>Dirección IP VPN(*)</label><br/>
                    <input/><br/>
                    <label>Supervisor</label><br/>
                    <select>
                        <option>Junior</option>
                        <option>Junior1</option>
                        <option>Junior2</option>
                    </select>
                </form> */}
                <form className="ticket-formulario">
                <div className="ticket-form">
                    <label for="name" className="ticket-label" >Nombres y Apellidos(*)</label>
                    <input type="text" name="name" id="name" placeholder="John Torres" required="required" className="ticket-input"  />
                </div>
                <div className="ticket-form">
                    <label for="direccion" className="ticket-label" >Dirección IP VPN(*)</label>
                    <input type="text" name="direccion" id="direccion" placeholder="192.9.x.x" required="required" className="ticket-input"  />
                </div>
                <div className="ticket-form">
                <label for="cars" className="ticket-label">Supervisor(a):</label>

<select id="cars" className="ticket-select">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="vw">VW</option>
  <option value="audi" selected>Junior M.</option>
</select>
                
                   
                   {/*  <input type="text" name="phone" id="phone" placeholder="+51 956632231" required="required" className="ticket-input" /> */}
                </div>
              {/*   <div className="ticket-form">
                    <label for="message" className="ticket-label">Mensaje</label>

                    <textarea rows="5" name="message" id="message" placeholder="Ingresa tu mensaje aquí" required="required" className="ticket-area"></textarea>
                </div>
                <div className="ticket-form">
                    <button type="submit" className="ticket-button" >Enviar Mensaje</button>
                </div>
                <p  id="result">
                </p> */}
            </form>

               
                </div>
                <div className="speed__test-box" >
                <h1 className="ticket__testfont ">Velocidad de Internet</h1>
             {/*    <form>
                    <label>Descarga(↓)</label><br/>
                    <input/><br/>
                    <label>Carga(↑)</label><br/>
                    <input/><br/>
                    <label>Tipo de Conexión de Internet</label><br/>
                    <select>
                        <option>Junior</option>
                        <option>Junior1</option>
                        <option>Junior2</option>
                    </select>
                    
                </form> */}
                 <form className="ticket-formulario">
                <div className="ticket-form">
                    <label for="download" className="ticket-label" >Descarga(↓)</label>
                    <input type="text" name="download" id="download" placeholder="0.0 Mbps" required="required" className="ticket-input"  />
                </div>
                <div className="ticket-form">
                    <label for="load" className="ticket-label" >Dirección IP VPN(*)</label>
                    <input type="text" name="load" id="load" placeholder="0.0 Mbps" required="required" className="ticket-input"  />
                </div>
                <div className="ticket-form">
                <label for="typeof" className="ticket-label">Tipo de Conexión de Internet:</label>

<select id="typeof" className="ticket-select">
  <option value="volvo" selected>Ethernet</option>
  <option value="saab">Wifi</option>
  <option value="audi" >BAM</option>
</select>
                
                   
                   {/*  <input type="text" name="phone" id="phone" placeholder="+51 956632231" required="required" className="ticket-input" /> */}
                </div>
              {/*   <div className="ticket-form">
                    <label for="message" className="ticket-label">Mensaje</label>

                    <textarea rows="5" name="message" id="message" placeholder="Ingresa tu mensaje aquí" required="required" className="ticket-area"></textarea>
                </div>
                <div className="ticket-form">
                    <button type="submit" className="ticket-button" >Enviar Mensaje</button>
                </div>
                <p  id="result">
                </p> */}
            </form>

                </div>
                <div className="speed__test-box" >
                <h1 className="ticket__testfont ">%Failed</h1>
               {/*  <form>
                    <label>Descarga(↓)</label><br/>
                    <input/><br/>
                    <label>Carga(↑)</label><br/>
                    <input/><br/>
                    <label>Descarga(↓)</label><br/>
                    <input/><br/>
                    <label>Carga(↑)</label><br/>
                    <input/><br/>
                    <label>Descarga(↓)</label><br/>
                    <input/><br/>
                   
                   
                </form> */}
                <form className="ticket-formulario">
                <div className="ticket-form">
                    <label for="chile" className="ticket-label" >192.9.100.201(Chile)</label>
                    <input type="text" name="chile" id="chile" placeholder="0.00 %" required="required" className="ticket-input"  />
                </div>
                <div className="ticket-form">
                    <label for="google" className="ticket-label" >8.8.8.8(Google)</label>
                    <input type="text" name="google" id="google" placeholder="0.00 %" required="required" className="ticket-input"  />
                </div>
                <div className="ticket-form">
                    <label for="gateway" className="ticket-label" >192.168.x.x(Gateway)</label>
                    <input type="text" name="gateway" id="gateway" placeholder="0.00 %" required="required" className="ticket-input"  />
                </div>
              {/*   <div className="ticket-form">
                    <label for="message" className="ticket-label">Mensaje</label>

                    <textarea rows="5" name="message" id="message" placeholder="Ingresa tu mensaje aquí" required="required" className="ticket-area"></textarea>
                </div>
                <div className="ticket-form">
                    <button type="submit" className="ticket-button" >Enviar Mensaje</button>
                </div>
                <p  id="result">
                </p> */}
            </form>

                </div>
                <div className="ticket__bar-menu">
                    <button className="ticket-button"><i class="fas fa-plus"> Agregar al histórico</i></button>
                    <button className="ticket-button1"><i class="fas fa-chalkboard"> Limpiar</i></button>
                    <button className="ticket-button2"> <i class="far fa-file-excel"> Excel</i></button>
                    <button className="ticket-button3"> <i class="far fa-file-alt"> Texto</i></button>
                    
                </div>
             
            </div>
               
                <div className="ticket__navbar">
                <Router>
                <nav className="ticket__bar ">
                    <div className="ticket__bar1">  <NavLink exact activeClassName="active" className="ticket__nav-link" to="/tickets/reporteTickets" >Reporte</NavLink></div>
                    <div className="ticket__bar2"><NavLink exact activeClassName="active" className="ticket__nav-link" to="/tickets/reporteGraphs" >Gráficas</NavLink></div>
                    <div className="ticket__bar2"><NavLink exact activeClassName="active" className="ticket__nav-link" to="/tickets/comparativos" >Comparativos</NavLink> </div>
                    <div className="ticket__bar2"><NavLink exact activeClassName="active" className="ticket__nav-link" to="/tickets/campaña" >Campaña sin problema</NavLink></div>
                    <div className="ticket__bar2"><NavLink exact activeClassName="active" className="ticket__nav-link" to="/tickets/prediccion" >Predicción del Mes</NavLink></div>
                </nav>
                    <Switch>
                    <Route exact path="/tickets/reporteTickets" component={TicketReporte} />
                    <Route exact path="/tickets/reporteGraphs" component={TicketGraph} />
                    <Route exact path="/tickets/comparativos" component={TicketComparative} />
                    <Route exact path="/tickets/campaña" component={TicketCampagna} />
                    <Route exact path="/tickets/prediccion" component={TicketPrediction} />
                    </Switch>
                </Router>
               
             
            </div>
         
               
            </div>
        </div>
    )
}
