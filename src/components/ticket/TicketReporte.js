import React from 'react';
import { Chrono } from "react-chrono";
import { items } from "./data";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { ReporteDiario } from './reporte/ReporteDiario';
import { ReporteSemanal } from './reporte/ReporteSemanal';
import { ReporteMensual } from './reporte/ReporteMensual';
import { ReportAll } from './reporte/ReportAll';

export const TicketReporte = () => {
    return (
        <div>
            {/* <div className="ticket__bar-app">
      <div style={{ width: "850px", height: "500px" }}>
        <Chrono items={items} mode="HORIZONTAL" />
      </div>
      </div> */}
                   
                   <div>
                <Router>
                <ul class="timeline" id="timeline">
     <li class="li complete">
     <NavLink exact activeClassName="active" className="ticket__report-link" to="/tickets/reporteTickets/diario" >
       <div class="timestamp">
         <span class="author">Diario</span>
      
       </div>
       <div class="status" >
      
      
       </div>
       </NavLink>
     </li>
     <li class="li complete">
     <NavLink exact activeClassName="active" className="ticket__report-link" to="/tickets/reporteTickets/semanal" >
       <div class="timestamp">
         <span class="author">Semanal</span>
   
       </div>
       <div class="status">
      
       </div>
       </NavLink>
     </li>
     <li class="li complete">
     <NavLink exact activeClassName="active" className="ticket__report-link" to="/tickets/reporteTickets/mensual" >
       <div class="timestamp">
         <span class="author">Mensual</span>
  
       </div>
       <div class="status">
    
       </div>
       </NavLink>
     </li>
     <li class="li complete">
     <NavLink exact activeClassName="active" className="ticket__report-link" to="/tickets/reporteTickets/todos" >
       <div class="timestamp">
         <span class="author">Todos</span>
     
       </div>
       <div class="status">
     
       </div>
       </NavLink>
     </li>
    </ul>      
                    <Switch>
                    <Route exact path="/tickets/reporteTickets/diario" component={ReporteDiario} />
                    <Route exact path="/tickets/reporteTickets/semanal" component={ReporteSemanal} />
                    <Route exact path="/tickets/reporteTickets/mensual" component={ReporteMensual} />
                    <Route exact path="/tickets/reporteTickets/todos" component={ReportAll} />
                    </Switch>
                </Router>
               
             
            </div>
    
        </div>
    )
}
