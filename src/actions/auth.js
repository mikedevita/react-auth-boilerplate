import 'isomorphic-fetch';
import { Auth, App } from '../constants';
import Api from '../middleware/api';


const payload = { username: 'mhdevita', password: '^hhFV16S!'};
Api.Auth.login(payload)
.then(function(response){
  console.log(response);
})
.catch(function(error){
  console.error(error);
});


export function load() {
  return dispatch => {
    const token = window.localStorage.getItem('token');
    dispatch({ type: Auth.LOAD_AUTH_SUCCESS, payload: { token } });
  };
}

export function login(data) {
  return dispatch => {
    dispatch({ type: Auth.LOGIN, payload: data });

    fetch('/api/sessions', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.text();
    })
    .then((token) => {
      window.localStorage.setItem('token', token);
      dispatch({ type: Auth.LOGIN_SUCCESS, payload: { token } });
    })
    .catch((err) => {
      dispatch({ type: Auth.LOGIN_FAILURE, error: err.message });
    });
  };
}

export function logout() {
  window.localStorage.removeItem('token');
  return { type: Auth.LOGOUT };
}
