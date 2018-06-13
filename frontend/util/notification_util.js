export const fetchNotifications = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/notifications'
  });
};

export const createNotification = (notification) => {
  return $.ajax({
    method: 'POST',
    url: '/api/notifications',
    data: {notification}
  });
};

export const deleteNotification = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notifications/${id}`
  });
};
