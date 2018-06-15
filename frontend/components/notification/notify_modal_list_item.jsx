import React from 'react';
import {Link} from 'react-router-dom';

class NotifyModalListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {initiator, closeModal} = this.props;
    let url = initiator.profile_url || "https://res.cloudinary.com/dbm56y2y/image/upload/v1529040240/default_profile.jpg";
    if (url === ""){ url = "https://res.cloudinary.com/dbm56y2y/image/upload/v1529040240/default_profile.jpg";}
    return (
      <li>
        <Link  onClick={() => closeModal()} to={`/profile/${initiator.id}`}><img src={url}/></Link><span className="notify-text"><Link onClick={() => closeModal()} className="notify-link-text" to={`/profile/${initiator.id}`}>{initiator.username}</Link> started following you</span>
      </li>
    );
  }
}

export default NotifyModalListItem;
