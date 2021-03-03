import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

  } from "react-router-dom";
import { InventiScreen } from '../components/inventi/InventiScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={InventiScreen} />
          <Route path="/auth" component={AuthRouter} />

          <Redirect to="/auth/login" />
        
        </Switch>
      </div>
    </Router>
    )
}
