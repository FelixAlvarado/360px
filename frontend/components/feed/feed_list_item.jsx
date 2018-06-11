import React from 'react';
import {Link} from 'react-router-dom';
import {findFollow} from '../../util/selectors';

class FeedListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  suggested() {
    console.log("made it");
    const {follows, currentUser, user} = this.props;
    if (findFollow(follows, currentUser.id, user.id)){
      return;
    } else {
      return ( " (suggested)" );
    }
  }

  render() {
  const {picture, user, clearPictures, openModal, currentUser, follows} = this.props;
  const profile = user.profile_url || "https://s15.postimg.cc/h65vznrt7/default_profile.jpg";
  return (
    <div className="photo-holder">
      <Link className={`show-link`} onClick={() => clearPictures()} to={`/profile/${picture.uploader_id}`}><img className="feed-profile-icon" src={profile}/></Link>
      <Link className={`show-link`} to={`/profile/${picture.uploader_id}`}><span className="feed-username">{user.username}{this.suggested()}</span></Link>
      <li onClick={() => openModal({string:'show',picture: picture, user: user})}>
        <img className="feed-photo" src={picture.image_url}/>
      </li>
      <span className="feed-title">{picture.title}</span>
    </div>
  );
}
}

export default FeedListItem;
