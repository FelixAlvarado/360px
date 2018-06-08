import * as APIPictures from '../util/picture_api_util';

export const RECEIVE_PICTURE = 'RECEIVE_PICTURES';
export const RECEIVE_PICTURES = 'RECEIVE_PICTUREs';


export const receivePictures = (pictures) => ({
  type: RECEIVE_PICTURES,
  pictures
});

export const receivePicture = (picture) => ({
  type: RECEIVE_PICTURES,
  picture
});

export const getUserPictures = (userId) => dispatch => {
  return APIPictures.fetchUserPictures(userId).then(pictures => dispatch(receivePictures(pictures)));
};

export const getUserPicture = (pictureId) => dispatch => {
  return APIPictures.fetchUserPicture(pictureId).then(picture => dispatch(receivePicture(picture)));
};
