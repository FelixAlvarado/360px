import React from 'react';

const PhotoListItem = ({picture}) => {
  return (
  <li><img className="profile-photo" src={picture.image_url}/></li>
  );
};

export default PhotoListItem;
