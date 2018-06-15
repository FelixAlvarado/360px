import { connect } from 'react-redux';
import React from 'react';
import {findFollow, notifyArray} from '../../util/selectors';
import NotifyModal from './notification_modal';
import { closeModal, openModal } from '../../actions/modal_actions';
import {deletePicture, updatePicture} from '../../actions/picture_actions';
import {fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions';
import {createNotification} from '../../util/notification_util';


const mapStateToProps = ({follows,notifications, session, entities:{users},ui:{modal}}, ownProps) => {
   return {
     currentUser: users[session.id],
     users: users,
     newNotifications: modal.newNotifications,
     notifications: notifyArray(notifications)
   };
};
const mapDispatchToProps = () => dispatch => ({
  closeModal: () => dispatch(closeModal())

});

export default connect(mapStateToProps, mapDispatchToProps)(NotifyModal);
