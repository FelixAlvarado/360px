import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import * as thunkAction from './actions/session_actions';
import * as APIPicture from './util/picture_api_util';
import * as pictureAction from './actions/picture_actions';
import * as followAction from './actions/follow_actions';
import * as followUtil from './util/follow_util';

document.addEventListener('DOMContentLoaded', () => {
  window.logout = thunkAction.logout;
  window.login = thunkAction.login;
  window.signup = thunkAction.signup;
  window.fetchUserPictures = APIPicture.fetchUserPictures;
  window.uploadPicture = APIPicture.uploadPicture;
  window.fetchPicture = APIPicture.fetchPicture;
  window.updatePicture = APIPicture.updatePicture;
  window.deletePicture = APIPicture.deletePicture;
  window.getUserPictures = pictureAction.getUserPictures;
  window.getUserPicture = pictureAction.getUserPicture;
  window.fetchUser = APIUtil.fetchUser;
  window.getUser = thunkAction.getUser;
  window.removePicture = pictureAction.deletePicture;
  window.createFollow = followUtil.createFollow;
  window.fetchFollows = followUtil.fetchFollows;
  window.deleteFollow = followUtil.deleteFollow;
  window.makeFollow = followAction.createFollow;
  window.getFollows = followAction.fetchFollows;
  window.removeFollow = followAction.deleteFollow;
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
