import React from 'react';
import {Link} from 'react-router-dom';
import NotifyModalListItem from './notify_modal_list_item';

class NotifyModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) this.props.closeModal();
    });
}

  render() {
    const {users, closeModal} = this.props;
    const notificationList = this.props.notifications.map((n) => {
      return <NotifyModalListItem  key={n.id} closeModal={closeModal} initiator={users[n.initiator_id]}/>;
    });
    return (
      <div>
      <div className="notify-header">
        <span className="notify-title">Notifications</span>
      </div>
      <ul className="notify-list">
        {notificationList}
      </ul>

      </div>

    );
  }
}

export default NotifyModal;
