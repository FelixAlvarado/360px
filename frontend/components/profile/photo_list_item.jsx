import React from 'react';

const PhotoListItem = ({picture, openModal, user, parseUrl}) => {
  return (
  <li onClick={() => openModal({string:'show',picture: picture, user: user})}><img className="profile-photo" src={parseUrl(picture.image_url)}/></li>
  );
};

export default PhotoListItem;
