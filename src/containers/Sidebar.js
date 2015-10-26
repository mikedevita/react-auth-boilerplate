import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

@connect(
  state => ({ auth: state.auth, isLoggedIn: !!state.auth.token }),
  { pushState }
)
export default class Sidebar extends React.Component {
  static propTypes = {
    isloggedIn: PropTypes.bool
  }

  render() {
    return (<ul className="nav nav-sidebar">
    <li><a href="#">Server Management</a></li>
    <li><a href="#">Server Management</a></li>
    <li><a href="#">Server Management</a></li>
    </ul>);
  }
}
