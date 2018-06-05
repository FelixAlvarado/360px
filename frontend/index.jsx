import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.logout = APIUtil.logout;
  window.login = APIUtil.login;
  window.signup = APIUtil.signup;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>360 px</h1>, root);
});
