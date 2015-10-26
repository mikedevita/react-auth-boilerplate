import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import lodash from 'lodash';
import NotificationSystem from 'react-notification-system';
import Actions from '../actions';

@connect(
  state => ({ notification: state.notification, auth: state.auth, isLoggedIn: !!state.auth.token }),
  { pushState }
)
export default class Root extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.any,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.any
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { dispatch } = this.context.store;
    Actions.notification.setup(this.refs.notificationSystem);
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.context.store;
    if (!this.props.auth.token && nextProps.auth.token) {
      this.props.pushState(null, '/'); // login
    } else if (this.props.auth.token && !nextProps.auth.token) {
      this.props.pushState(null, '/login'); // logout
    }

    if (!lodash.isEmpty(nextProps.notification)) {
      dispatch( Actions.notification.addNotification(nextProps.notification) );
    }
  }

  render() {
    const { children } = this.props;
    return (<div className="Root">
      <NotificationSystem ref="notificationSystem" />
      { children }
    </div>);
  }
}
