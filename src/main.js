import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import configureStore from './store/configureStore';
import * as authActions from './actions/auth';
import routes from './routes';
import DevTools from './components/DevTools';


const initialState = { auth: { token: null } };
export const store = configureStore(initialState);
const component = <ReduxRouter routes={ routes(store) } />;
const target = document.getElementById('app');

store.dispatch(authActions.load());
if (__DEV_TOOLS__) {
  ReactDOM.render(
    <Provider store={ store }>
      <div>
        { component }
        {__DEV_TOOLS__ ?
           <DevTools /> : null
         }
      </div>
    </Provider>,
    target
  );
} else {
  ReactDOM.render(
    <Provider store={ store }>
      { component }
    </Provider>,
    target
  );
}

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // Enable react devtools
}
