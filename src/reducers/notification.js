import createReducer from '../util/createReducer';
import { App } from '../constants';

const initialState = {};

function addNotification(state, action) {
  return Object.assign({}, action.notification.error, { raw: action.notification.raw});
}

export default createReducer(initialState, {
  [App.GENERAL_ERROR]: addNotification
});
