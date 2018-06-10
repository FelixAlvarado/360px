export const uploadPicture = (picture, userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/pictures`,
    data: {picture}
  });
};

export const fetchUserPictures = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/pictures`
  });
};

export const fetchPicture = (photoId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pictures/${photoId}`
  });
};

export const updatePicture = (picture) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/pictures/${picture.id}`,
    data: {picture}
  });
};

export const deletePicture = (photoId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/pictures/${photoId}`
  });
};
