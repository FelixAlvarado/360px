import {RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS} from '../actions/session_actions.js';

const sessionErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    return [];
    case RECEIVE_ERRORS:
    return  action.errors;
    default:
    return initialState;
  }
};

export default sessionErrorsReducer;
