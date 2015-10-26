import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import Actions from '../../actions';

@connect(
  state => ({ auth: state.auth, isLoggedIn: !!state.auth.token }),
  { pushState }
)
export default class User extends React.Component {
  static propTypes = {
    users: PropTypes.object.isRequired
  }

  static contextTypes = {
    store: PropTypes.any
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { dispatch } = this.context.store;
    dispatch(Actions.app.fetchUsers());
  }
  render() {
    return (<div>
      <h1>User Management</h1>
    </div>);
  }
}
