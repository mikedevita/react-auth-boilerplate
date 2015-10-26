import 'isomorphic-fetch';
import { User, App, Notification } from '../constants';
import { Api } from '../middleware/api/index';

export function fetchUsers() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({ type: User.GET_USERS });

    Api.User.findAll(token)
    .then((response) => {
      console.debug(response);
      dispatch({ type: User.GOT_USERS, users: response });
    })
    .catch((response) => {
      console.error(response);
      dispatch({ type: Notification.EMIT_NOTIFICATION, level: 'error', message: response.error.msg });
    });
  };
}
