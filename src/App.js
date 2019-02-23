import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import * as Routes from './Routes';
import Dashboard from './components/dashboard';
import Categories from './components/categories';

const routesConfig = [
  {
      path: Routes.HOME,
      exact: true,
      component: () => <HomePage/>
  },
  {
      path: Routes.CATEGORIES,
      exact: true,
      component: () => <Categories/>
  }
];


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
