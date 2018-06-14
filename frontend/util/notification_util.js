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

export const updateNotification = (notification) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/notifications/${notification.id}`,
    data: {notification}
  });
};
