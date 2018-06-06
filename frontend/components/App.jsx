import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Home from './home';
import {Route, Switch} from 'react-router';
const App = () => (
  <div>
    <header>
    <h1>300 px !!!!!!!</h1>
    </header>
    <Switch>
    <Route exact path="/" component={GreetingContainer}/>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
