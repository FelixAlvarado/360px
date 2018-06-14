import * as APINotifications from '../util/notification_util';


export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

export const receiveNotification = (notification) => (
  {
    type: RECEIVE_NOTIFICATION,
    notification
  }
);
// {
//   return {
//   type: RECEIVE_NOTIFICATION,
//   notification
// };
// };

export const receiveNotifications = (notifications) => ({
  type: RECEIVE_NOTIFICATIONS,
  notifications
});

export const fetchNotifications = () => dispatch => (
  APINotifications.fetchNotifications().then(notifications => dispatch(receiveNotifications(notifications)))
);

export const createNotification = (notification) => dispatch => {
  return APINotifications.createNotification(notification).then(notification => {
    return dispatch(receiveNotification(notification));
  });
};

export const updateNotification = (notification) => dispatch => {
  return APINotifications.updateNotification(notification).then(notification => {
    return dispatch(receiveNotification(notification));
  });
};
