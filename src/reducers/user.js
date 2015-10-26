import createReducer from '../util/createReducer';

import { User } from '../constants';

const initialState = {
  fetching: false,
  users: []
};

function onGetUsers(state = initialState, action) {
  return {
    ...state,
    fetching: true
  };
}

function onGotUsers(state = initialState, action) {
  return {
    ...state,
    fetching: false,
    users: action.users
  };
}

export default createReducer(initialState, {
  [User.GET_USERS]: onGetUsers,
  [User.GOT_USERS]: onGotUsers
});
