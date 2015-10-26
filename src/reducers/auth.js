import createReducer from '../util/createReducer';

import { Auth } from '../constants';

const initialState = {
  token: null,
  user: null
};

function onLoadAuthSuccess(state, action) {
  return {
    ...state,
    user: action.user,
    token: action.token
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
    user: action.user,
    token: action.token,
    error: null
  };
}

function onLoginFailure(state, action) {
  return {
    ...state,
    isLoggingIn: false,
    token: null,
    user: null
  };
}

function onLogout(state, action) {
  return {
    ...state,
    token: null,
    user: null
  };
}

export default createReducer(initialState, {
  [Auth.LOAD_AUTH_SUCCESS]: onLoadAuthSuccess,
  [Auth.LOGIN]: onLogin,
  [Auth.LOGIN_SUCCESS]: onLoginSuccess,
  [Auth.LOGIN_FAILURE]: onLoginFailure,
  [Auth.LOGOUT]: onLogout
});
