import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import * as thunkAction from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.logout = thunkAction.logout;
  window.login = thunkAction.login;
  window.signup = thunkAction.signup;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
