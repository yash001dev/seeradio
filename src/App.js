// people using the keyboard for navigation or screen readers will still be able to use this app.

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header.index";
import LoginScreen from './screen/Signin/login.index';
import AdvertiserForm from './screen/AdvertiserForm/AdvertiserForm.index';
import AddOrderForm from "./screen/AddOrderForm/AddOrderForm.index";



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/header" component={AddOrderForm } />
        <Route path="/assets" component={AdvertiserForm} />
      </Switch>
    </Router>
  );
}

