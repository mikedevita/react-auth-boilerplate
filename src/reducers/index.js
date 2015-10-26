import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { default as auth } from './auth';
import { default as notification } from './notification';
import { default as user } from './user';
const rootReducer = combineReducers({
  router: routerStateReducer,
  auth,
  user,
  notification
});

export default rootReducer;
