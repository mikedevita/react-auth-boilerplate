import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { default as auth } from './auth';
import { default as notification } from './notification';

const rootReducer = combineReducers({
  router: routerStateReducer,
  auth,
  notification
});

export default rootReducer;
