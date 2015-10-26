import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import NotificationSystem from 'react-notification-system';

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

  constructor(props, context) {
    super(props, context);
    this._notificationSystem = null;
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.auth.token && nextProps.auth.token) {
      this.props.pushState(null, '/'); // login
    } else if (this.props.auth.token && !nextProps.auth.token) {
      this.props.pushState(null, '/login'); // logout
    }

    if (nextProps.notification) {
      this._notificationSystem.addNotification({
        message: nextProps.notification.message,
        level: nextProps.notification.level
      });
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
