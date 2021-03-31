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
import Advertiser from './screen/Advertiser/Advertiser.index';
import AddAsset from './screen/AddAssets/AddAssets.index';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/header" component={AddOrderForm } />
        <Route path="/assets" component={AdvertiserForm} />
        <Route path="/advertiser" component={Advertiser} />
        <Route path="/test" component={AddAsset} />
      </Switch>
    </Router>
  );
}

