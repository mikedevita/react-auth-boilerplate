import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Actions from '../../actions';
import { App } from '../../constants';

@connect(state => ({ auth: state.auth }))
export default class Login extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.any
  };

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginType = this.handleLoginType.bind(this);

    this.state = {
      loginType: App.DEFAULT_LOGIN_TYPE
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.context.store;
    const data = {
      identity: this.refs.identity.value,
      password: this.refs.password.value,
      loginType: this.state.loginType.toLowerCase()
    };
    dispatch(Actions.auth.login(data));
  }

  handleLoginType(event) {
    event.preventDefault();
    this.setState({
      loginType: event.target.value
    });
  }

  render() {
    const { auth } = this.props;
    return (<div className="col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-sm-6 col-md-6 col-lg-6">
      <div className="well login-box">
        <form className="form" name="loginForm" onSubmit={ this.handleSubmit }>
          { auth.error && `${ auth.error }` }
          <legend>SAP Infrastructure</legend>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" ref="identity" name="username" placeholder="Username" type="text" className="form-control input-lg" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" ref="password" name="password" placeholder="Password" type="password" className="form-control input-lg" required/>
          </div>
          <div className="form-group">
            <div className="btn-group">
              <button
                type="button"
                className={(this.state.loginType === 'LDAP') ? 'btn btn-success active' : 'btn btn-info'}
                value="LDAP"
                onClick={this.handleLoginType}
              >
              LDAP
              </button>
              <button
                type="button"
                className={(this.state.loginType === 'LOCAL') ? 'btn btn-success  active' : 'btn btn-info'}
                value="LOCAL"
                onClick={this.handleLoginType}
              >
              Local
              </button>
            </div>
          </div>
          <div className="form-group text-center">
            <input type="submit" className="btn btn-primary btn-lg btn-block" value="Login" />
          </div>
        </form>
      </div>
    </div>);
  }
}
