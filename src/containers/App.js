import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { pushState } from 'redux-router';
import * as authActions from '../actions/auth';

@connect(
  state => ({ auth: state.auth, isLoggedIn: !!state.auth.token }),
  { pushState }
)
export default class App extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.any,
    isLoggedIn: PropTypes.bool.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.any
  };

  constructor(props, context) {
    super(props, context);
    this.onLogout = this.onLogout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.auth.token && nextProps.auth.token) {
      this.props.pushState(null, '/account'); // login
    } else if (this.props.auth.token && !nextProps.auth.token) {
      this.props.pushState(null, '/'); // logout
    }
  }

  onLogout(event) {
    event.preventDefault();
    const { dispatch } = this.context.store;
    dispatch(authActions.logout());
  }

  render() {
    const { isLoggedIn, children } = this.props;

    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            { !isLoggedIn && <li><Link to="/login">Login</Link></li> }
            { isLoggedIn && <li><a href="/logout" onClick={ this.onLogout }>Logout</a></li> }
          </ul>
        </nav>
        <div className="container">{ children }</div>
      </div>
    );
  }
}

App.propTypes = {

};
