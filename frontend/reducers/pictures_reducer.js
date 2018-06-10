import {RECEIVE_PICTURE, RECEIVE_PICTURES, CLEAR_PICTURES, REMOVE_PICTURE} from '../actions/picture_actions';
import merge from 'lodash/merge';

const picturesReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  switch (action.type){
    case RECEIVE_PICTURE:
    return merge({}, initialState, {[action.picture.id]:action.picture});
    case RECEIVE_PICTURES:
    return merge({}, action.pictures);
    case CLEAR_PICTURES:
    return {};
    case REMOVE_PICTURE:
    const newState = merge({}, initialState);
    delete newState[action.picture.id];
    return newState;
    default:
    return initialState;
  }
};

export default picturesReducer;
