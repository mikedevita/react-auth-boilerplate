import React, { Component, PropTypes } from 'react';
import * as appActions from '../../actions/app';

export default class Dashboard extends Component {

  static contextTypes = {
    store: PropTypes.any
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { dispatch } = this.context.store;
    dispatch(appActions.getDashboardStats());
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
