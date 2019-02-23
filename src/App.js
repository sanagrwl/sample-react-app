import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
import {routesConfig} from './Routes';

const App = () => (
  <Router>
    <Dashboard>
      {routesConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Dashboard>
  </Router>
);

export default App;
