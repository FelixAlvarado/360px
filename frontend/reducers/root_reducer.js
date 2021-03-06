import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import followsReducer from './follows_reducer';
import ui from './ui_reducer';
import notificationsReducer from './notifications_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  follows: followsReducer,
  session: sessionReducer,
  ui: ui,
  errors: errorsReducer,
  notifications: notificationsReducer
});

export default rootReducer;
