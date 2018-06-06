import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Home from './home';
import {Route, Switch} from 'react-router';
import {AuthRoute} from '../util/route_util';
import FeedComponent from './feed';

const App = () => (
  <div>
    <Switch>
    <AuthRoute exact path="/" component={Home}/>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/feed" component={FeedComponent}/>
    <Route component={FeedComponent}/>
    </Switch>
  </div>
);

export default App;
