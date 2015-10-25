import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';

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
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.context.store;
    const data = {
      identity: this.refs.identity.value,
      password: this.refs.password.value
    };
    dispatch(authActions.login(data));
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
          <div className="form-group text-center">
            <input type="submit" className="btn btn-success btn-lg btn-block" value="Login" />
          </div>
        </form>
      </div>
    </div>);
  }
}
