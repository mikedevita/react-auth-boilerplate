import 'isomorphic-fetch';
import { Auth, App, Notification } from '../constants';
import Api from '../middleware/api/index';


function decodeToken(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  var object = window.atob(base64);
  return JSON.parse(object);
}

export function load() {
  return dispatch => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const user = decodeToken(token);
      dispatch({ type: Auth.LOAD_AUTH_SUCCESS, user: user, token: token });
    }
  };
}

export function login(data) {
  return dispatch => {
    dispatch({ type: Auth.LOGIN, payload: data });
    Api.Auth.login({ identity: data.identity, password: data.password, loginType: data.loginType })
    .then((response) => {
      window.localStorage.setItem('token', response.token);
      const user = decodeToken(response.token);
      dispatch({ type: Auth.LOGIN_SUCCESS, user: user, token: response.token });
    })
    .catch((error) => {
      dispatch({ type: Auth.LOGIN_FAILURE, error: error });
      dispatch({ type: Notification.EMIT_NOTIFICATION, level: error.level, message: error.message });
    });
  };
}

export function logout() {
  window.localStorage.removeItem('token');
  return { type: Auth.LOGOUT };
}
