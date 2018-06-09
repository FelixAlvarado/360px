import React from 'react';

const PhotoListItem = ({picture, openModal}) => {
  return (
  <li onClick={() => openModal({string:'show',picture: picture})}><img className="profile-photo" src={picture.image_url}/></li>
  );
};

export default PhotoListItem;
