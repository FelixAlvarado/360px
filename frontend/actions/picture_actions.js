import * as APIPictures from '../util/picture_api_util';
import * as APIFeed from '../util/feed_util';

export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const RECEIVE_PICTURES = 'RECEIVE_PICTURES';
export const CLEAR_PICTURES = 'CLEAR_PICTURES';
export const REMOVE_PICTURE = 'REMOVE_PICTURE';


export const receivePictures = (pictures) => ({
  type: RECEIVE_PICTURES,
  pictures
});

export const receivePicture = (picture) => {

  return {type: RECEIVE_PICTURE,
  picture};
};

export const removePicture = (picture) => {

  return {type: REMOVE_PICTURE,
  picture};
};

export const clearPictures = () => {
  console.log("made it!")
  return {type: CLEAR_PICTURES};
};

export const getUserPictures = (userId) => dispatch => {
  return APIPictures.fetchUserPictures(userId).then(pictures => dispatch(receivePictures(pictures)));
};

export const getUserPicture = (pictureId) => dispatch => {
  return APIPictures.fetchUserPicture(pictureId).then(picture => dispatch(receivePicture(picture)));
};

export const uploadPicture = (picture, userId) => dispatch => {
  return APIPictures.uploadPicture(picture, userId).then(picture => {
    return dispatch(receivePicture(picture));
  });
};

export const updatePicture = (picture) => dispatch => {
  return APIPictures.updatePicture(picture).then(picture => {
    return dispatch(receivePicture(picture));
  });
};

export const deletePicture = (pictureId) => dispatch => {
  return APIPictures.deletePicture(pictureId).then(picture => dispatch(removePicture(picture)));
};

export const homeFeed = () => dispatch => {
  return APIFeed.homeFeed().then(pictures => dispatch(receivePictures(pictures)));
};
