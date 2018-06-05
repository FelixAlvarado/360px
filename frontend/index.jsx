import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // window.logout = APIUtil.logout;
  // window.login = APIUtil.login;
  // window.signup = APIUtil.signup;
  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
