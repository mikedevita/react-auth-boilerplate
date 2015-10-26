import createReducer from '../util/createReducer';
import { Notification } from '../constants';

const initialState = {};

function emitNotification(state, action) {
  const nextState = {
    ...state,
    level: action.level,
    message: action.message
  };
  return nextState;
}

function clearNotification(state, action) {
  const nextState = {};
  return nextState;
}

export default createReducer(initialState, {
  [Notification.EMIT_NOTIFICATION]: emitNotification,
  [Notification.NOTIFICATION_EMITTED]: clearNotification
});
