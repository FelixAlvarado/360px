import React from 'react';
import {Link} from 'react-router-dom';

class DiscoverFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  profileDirect(e) {
    e.stopPropagation();
  }

  render() {
    const {picture, openModal, user, clearPictures} = this.props;
      const defaultUser = user || {id:"", username:"", profile_url:"https://s15.postimg.cc/h65vznrt7/default_profile.jpg"};
      const profile = defaultUser.profile_url || "https://s15.postimg.cc/h65vznrt7/default_profile.jpg";
    return (
      <div>
      <li onClick={() => openModal({string:'show',picture: picture, user: user})}><img className="discover-photo" src={picture.image_url}/>
        <div className="user-info">
            <Link className={`show-link`} onClick={() => clearPictures()} to={`/profile/${picture.uploader_id}`}>
                <img onClick={(e) => this.profileDirect(e)} className="discover-profile-icon" src={profile}/>
            </Link>
            <Link onClick={(e) => this.profileDirect(e)} className={`show-link`} to={`/profile/${picture.uploader_id}`}>
                <span className="discover-username">{defaultUser.username}</span>
            </Link>
        </div>
      </li>

      </div>
    );
  }
}

export default DiscoverFeedItem;
