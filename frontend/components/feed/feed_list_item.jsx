import React from 'react';
import {Link} from 'react-router-dom';
import {findFollow} from '../../util/selectors';

class FeedListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  suggested() {
    const {follows, currentUser, user} = this.props;
    if (user){
    if (findFollow(follows, currentUser.id, user.id)){
      return;
    } else {
      return ( " (suggested)" );
    }
  }
  }
  feedTitle() {
    const {picture} = this.props;
    if (picture.title === "") {
      return(<div className="feed-title2">title</div>);
    }else {
      return (<div className="feed-title">{picture.title}</div>);
    }
  }

  render() {
  const {picture, user, clearPictures, openModal, currentUser, follows, parseUrlBig} = this.props;
  const defaultUser = user || {id:"", username: "", profile_url:"https://s15.postimg.cc/h65vznrt7/default_profile.jpg"};
  const profile = defaultUser.profile_url || "https://s15.postimg.cc/h65vznrt7/default_profile.jpg";
  return (
    <div className="photo-holder">
      <Link className={`show-link`} onClick={() => clearPictures()} to={`/profile/${picture.uploader_id}`}><img className="feed-profile-icon" src={profile}/></Link>
      <Link className={`show-link`} to={`/profile/${picture.uploader_id}`}><span className="feed-username">{defaultUser.username}{this.suggested()}</span></Link>
      <li onClick={() => openModal({string:'show',picture: picture, user: user})}>
        <img className="feed-photo" src={parseUrlBig(picture.image_url)}/>
      </li>
      {this.feedTitle()}

    </div>
  );
}
}

export default FeedListItem;
