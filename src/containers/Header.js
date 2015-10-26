import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { App } from '../constants';

import Navigation from '../components/Header/Navigation';

@connect(
  state => ({ auth: state.auth, isLoggedIn: !!state.auth.token }),
  { pushState }
)
export default class Header extends React.Component {
  static propTypes = {
    isloggedIn: PropTypes.bool,
    auth: PropTypes.object,
    logout: PropTypes.func.isRequired,
  }

  handleLogout = event => {
    const { logout } = this.props;
    event.preventDefault();
    logout();
  }

  render() {
    const { auth, router } = this.props;
    return (<Navigation appName={App.APP_NAME} router={router} currentRoute={router.location} user={auth.user} logout={this.handleLogout} />);
  }
}
