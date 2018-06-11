import React from 'react';
import {Link} from 'react-router-dom';

class FeedListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
  const {picture, user, clearPictures, openModal} = this.props;
  const profile = user.profile_url || "https://s15.postimg.cc/h65vznrt7/default_profile.jpg";
  return (
    <div className="photo-holder">
      <Link className={`show-link`} onClick={() => clearPictures()} to={`/profile/${picture.uploader_id}`}><img className="feed-profile-icon" src={profile}/></Link>
      <Link className={`show-link`} to={`/profile/${picture.uploader_id}`}><span className="feed-username">{user.username}</span></Link>
      <li onClick={() => openModal({string:'show',picture: picture, user: user})}>
        <img className="feed-photo" src={picture.image_url}/>
      </li>
    </div>
  );
}
}

export default FeedListItem;
