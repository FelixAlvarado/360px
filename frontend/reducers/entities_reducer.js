import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import picturesReducer from './pictures_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  pictures: picturesReducer,

});

export default entitiesReducer;
