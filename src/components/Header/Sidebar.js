import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

@connect(
  state => ({ auth: state.auth, isLoggedIn: !!state.auth.token }),
  { pushState }
)
export default class Sidebar extends React.Component {
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
    const { auth } = this.props;
    return (<div clasName="well">
    <h4>Sidebar Here</h4>
    </div>);
  }
}
