import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Home from './home';
import {Route, Switch} from 'react-router';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
    <h1>300 px !!!!!!!</h1>
    <GreetingContainer/>
    </header>
    <Switch>
    <Route path="/home" component={Home}/>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
