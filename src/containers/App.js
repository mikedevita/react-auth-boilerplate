import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router'
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth';

import Header from './Header';
import Sidebar from './Sidebar';

@connect(
  state => ({ auth: state.auth, isLoggedIn: !!state.auth.token }),
  { pushState }
)
export default class App extends React.Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.any,
    pushState: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  static contextTypes = {
    store: PropTypes.any
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { children } = this.props;
    const { dispatch, getState } = this.context.store;
    return (<div className="App">
      <Header
        router={getState().router}
        {...bindActionCreators({ logout: authActions.logout }, dispatch)}
      />
      <div className="app-container container-fluid">
        <div className="col-sm-3 col-md-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-sm-9 col-sm-offset-2 col-md-10">
          {children}
        </div>
      </div>
    </div>);
  }
}
