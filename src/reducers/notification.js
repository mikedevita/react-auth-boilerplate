import createReducer from '../util/createReducer';
import { App } from '../constants';

const initialState = {};

function addNotification(state, action) {
  const nextState = {
    ...state,
    level: action.level,
    message: action.message
  };
  console.debug(nextState);
  return nextState;
}

export default createReducer(initialState, {
  [App.EMIT_NOTIFICATION]: addNotification
});
