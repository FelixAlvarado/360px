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
import * as feedUtil from './util/feed_util';
import * as NotificationUtil from './util/notification_util';

document.addEventListener('DOMContentLoaded', () => {
  window.deleteFollow = followUtil.deleteFollow;
  window.makeFollow = followAction.createFollow;
  window.getFollows = followAction.fetchFollows;
  window.removeFollow = followAction.deleteFollow;
  window.homeFeed = feedUtil.homeFeed;
  window.home = pictureAction.homeFeed;
  window.fetchUsers = APIUtil.fetchUsers;
  window.receiveUsers = thunkAction.fetchUsers;
  window.updateUser = APIUtil.updateUser;
  window.updateUser = APIUtil.updateUser;
  window.updateCurrentUser = thunkAction.updateUser;
  window.fetchNotifications = NotificationUtil.fetchNotifications;
  window.createNotification = NotificationUtil.createNotification;
  window.deleteNotification = NotificationUtil.deleteNotification;

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
