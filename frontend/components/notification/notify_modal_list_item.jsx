import React from 'react';
import {Link} from 'react-router-dom';

class NotifyModalListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {initiator, closeModal} = this.props;
    return (
      <li>
        <Link  onClick={() => closeModal()} to={`/profile/${initiator.id}`}><img src={initiator.profile_url}/></Link><span className="notify-text"><Link onClick={() => closeModal()} className="notify-link-text" to={`/profile/${initiator.id}`}>{initiator.username}</Link> started following you</span>
      </li>
    );
  }
}

export default NotifyModalListItem;
