import {RECEIVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS} from '../actions/session_actions.js';
import merge from 'lodash/merge';

const usersReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    return merge({}, initialState,
      {[action.currentUser.id]: action.currentUser});
    case RECEIVE_USER:
    return merge({}, initialState, {[action.user.id]:action.user});
    case RECEIVE_USERS:
      return merge({}, action.users);
    default:
    return initialState;
  }
};

export default usersReducer;
