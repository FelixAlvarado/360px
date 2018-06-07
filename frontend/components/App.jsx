import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Home from './home';
import {Route, Switch} from 'react-router';
import {AuthRoute, LogRoute} from '../util/route_util';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
  <div>
    <Switch>
    <AuthRoute exact path="/" component={Home}/>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <LogRoute path="/profile" component={ProfileContainer} />
    <LogRoute path="/feed" component={FeedContainer}/>
    <LogRoute component={FeedContainer}/>
    </Switch>
  </div>
);

export default App;
