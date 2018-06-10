import {RECEIVE_FOLLOW, RECEIVE_FOLLOWS, REMOVE_FOLLOW} from '../actions/follow_actions';
import merge from 'lodash/merge';

const followsReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  switch (action.type){
    case RECEIVE_FOLLOW:
    console.log("made it");
    return merge({}, initialState, {[action.follow.id]:action.follow});
    case RECEIVE_FOLLOWS:
    return merge({}, action.follows);
    case REMOVE_FOLLOW:
    const newState = merge({}, initialState);
    delete newState[action.follow.id];
    return newState;
    default:
    console.log("made it to default");
    return initialState;
  }
};

export default followsReducer;
