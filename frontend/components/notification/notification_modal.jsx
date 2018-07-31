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

    let notifyModal = document.getElementsByClassName('modal-child-notify');

  document.addEventListener('click', (e) => {
    if (notifyModal.length > 0){
    var clickOnModal = notifyModal[0].contains(e.target);

    if (!clickOnModal) {
      this.props.closeModal();
      notifyModal = [];
    }
  }
  });



}

  notifyBody(notificationList) {
    if (this.props.notifications.length === 0){
      return(<div className="no-notify"><span>You have no notifications</span></div>);
    }else {
      return (
        <ul className="notify-list">
          {notificationList}
        </ul>
      );
    }
  }
  render() {
    const {users, closeModal} = this.props;
    let ids = [];
    const notificationList = this.props.notifications.map((n) => {
        if (!ids.includes(n.initiator_id)){
          ids.push(n.initiator_id);
      return <NotifyModalListItem  key={n.id} closeModal={closeModal} initiator={users[n.initiator_id]}/>;
      }
    });
    return (
      <div>
        <div className="notify-header">
          <span className="notify-title">Notifications</span>
        </div>
        {this.notifyBody(notificationList)}
      </div>

    );
  }
}

export default NotifyModal;
