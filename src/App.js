import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/navigation';
import {routesConfig} from './Routes';

const App = () => (
  <Router>
    <Navigation>
      {routesConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Navigation>
  </Router>
);

export default App;
