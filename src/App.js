import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomePage from './containers/HomePage';

const App = () => (
  <Router>
      <Route exact path="/" component={HomePage} />
  </Router>
);

export default App;
