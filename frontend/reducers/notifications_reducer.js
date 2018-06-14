import {RECEIVE_NOTIFICATION, RECEIVE_NOTIFICATIONS} from '../actions/notification_actions';
import merge from 'lodash/merge';

const notificationsReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  switch (action.type){
    case RECEIVE_NOTIFICATION:
    return merge({}, initialState, {[action.notification.id]:action.notification});
    case RECEIVE_NOTIFICATIONS:
    return merge({}, action.notifications);
    default:
    return initialState;
  }
};

export default notificationsReducer;
