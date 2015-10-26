import 'isomorphic-fetch';
import { App } from '../constants';
import Api from '../middleware/api';

export function getDashboardStats() {
  return dispatch => {
    dispatch({ type: App.GET_DASHBOARD_STATS });
    Api.Dashboard.stats()
    .then((response) => {
      dispatch({ type: App.GOT_DASHBOARD_STATS, stats: response });
    })
    .catch((error) => {
      dispatch({ type: App.GENERAL_ERROR, notification: error });
    });
  };
}
