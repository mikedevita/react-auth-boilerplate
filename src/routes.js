import React from 'react';
import { Route } from 'react-router';

import { Root, App, Login, Dashboard, Test, NotFound } from './containers';

export default function routes(store) {
  const requireLogin = (nextState, replaceState) => {
    const isLoggedIn = !!store.getState().auth.token;
    if (!isLoggedIn) {
      replaceState(null, '/login');
    }
  };

  return (<Route name="root" component={Root}>
    <Route path="login" name="login" component={Login} />
    <Route name="App" navRoute="true" component={App} onEnter={ requireLogin }>
      <Route name="Home" path="/" component={ Dashboard } />
      <Route name="Test" path="/test" component={ Test } />
    </Route>
    <Route path="*" component={NotFound} />);
  </Route>);
}
