import {RECEIVE_CURRENT_USER, RECEIVE_USER} from '../actions/session_actions.js';
import merge from 'lodash/merge';

const usersReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    return merge({}, initialState,
      {[action.currentUser.id]: action.currentUser});
    case RECEIVE_USER:
    return merge({}, initialState, {[action.user.id]:action.user});
    default:
    return initialState;
  }
};

export default usersReducer;
