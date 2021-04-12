// people using the keyboard for navigation or screen readers will still be able to use this app.

import React from "react";
import {
  
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";

import LoginScreen from './screen/Signin/login.index';
import AdvertiserForm from './screen/AdvertiserForm/AdvertiserForm.index';
import AddOrderForm from "./screen/AddOrderForm/AddOrderForm.index";
import Advertiser from './screen/Advertiser/Advertiser.index';
import AddAsset from './screen/AddAssets/AddAssets.index';
import Dashboard from './screen/Dashboard/Dashboard.index';
import { connect } from "react-redux";
import ChangePassword from './screen/ChangePassword/changepassword.index';

function App(props) {

  const checkStatus=(component)=>{
    if(props.userStatus){
      return component
    }
    else{
      return (<Redirect to="/" />)
    }
  }

  return (
   
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/dashboard" render={()=>checkStatus(<Dashboard />)} />
        <Route path="/header" component={AddOrderForm } />
        <Route path="/assets" component={AdvertiserForm} />
        <Route path="/advertiser" render={()=>checkStatus(<Advertiser />)} />
        <Route path="/resetPassword" render={()=>checkStatus(<ChangePassword />)}/>
        <Route path="/test" component={AddAsset} />
      </Switch>
   
  );
}

const mapStateToProps = (state)=>{
  return{
    userStatus:state.person.isLogged
  }
}

export default connect(mapStateToProps)(App);