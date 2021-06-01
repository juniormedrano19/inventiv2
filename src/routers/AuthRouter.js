import React from 'react';
import {
   /*  BrowserRouter as Router, */
   HashRouter as Router,
    Switch,
    Route,
    Redirect,

  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { TicketReporte } from '../components/ticket/TicketReporte';


export const AuthRouter = () => {
    return (
        <Router>
      <div>
        
        <Switch>
          <Route exact path="/auth/login/" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
    {/*       <Route exact path="/tickets/reporteTicket" component={TicketReporte} /> */}
          <Redirect to="/auth/login"/>
        
        </Switch>
      </div>
    </Router>
    )
}
