import Promise from 'bluebird';

import { Notification } from '../constants';

let NotificationSystem = null;
export function setup(notificationSystem) {
  NotificationSystem = notificationSystem;
}

export function addNotification(notification) {
  return dispatch => {
    NotificationSystem.addNotification(notification);
    dispatch({ type: Notification.NOTIFICATION_EMITTED });
  };
}
