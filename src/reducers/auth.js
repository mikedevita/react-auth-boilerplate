import createReducer from '../util/createReducer';

import { Auth } from '../constants';

const initialState = {
  token: null
};

function onLoadAuthSuccess(state, action) {
  return {
    ...state,
    token: action.payload.token
  };
}

function onLogin(state, action) {
  return {
    ...state,
    isLoggingIn: true
  };
}

function onLoginSuccess(state, action) {
  return {
    ...state,
    isLoggingIn: false,
    token: action.payload.token,
    error: null
  };
}

function onLoginFailure(state, action) {
  return {
    ...state,
    isLoggingIn: false,
    token: null,
    error: action.error
  };
}

function onLogout(state, action) {
  return {
    ...state,
    token: null
  };
}

export default createReducer(initialState, {
  [Auth.LOAD_AUTH_SUCCESS]: onLoadAuthSuccess,
  [Auth.LOGIN]: onLogin,
  [Auth.LOGIN_SUCCESS]: onLoginSuccess,
  [Auth.LOGIN_FAILURE]: onLoginFailure,
  [Auth.LOGOUT]: onLogout
});
