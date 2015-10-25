import React from 'react';
import { Route } from 'react-router';

import { App, Login, Dashboard, NotFound } from './containers';

export default function routes(store) {
  const requireLogin = (nextState, replaceState) => {
    const isLoggedIn = !!store.getState().auth.token;
    if (!isLoggedIn) {
      replaceState(null, '/login');
    }
  };

  return (<Route path="/" component={App}>
    <Route path="/login" component={Login} />

    <Route onEnter={ requireLogin } >
      <Route path="dashboard" component={ Dashboard } />
    </Route>

    <Route path="*" component={NotFound} />
  </Route>);
}
