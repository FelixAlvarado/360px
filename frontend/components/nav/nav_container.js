import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './nav_bar';
import {uploadPicture} from '../../actions/picture_actions';
import { openModal, closeModal} from '../../actions/modal_actions';
import {getUserPictures, clearPictures, homePage} from '../../actions/picture_actions';
import {getUser} from '../../actions/session_actions';
import {fetchNotifications, updateNotification} from '../../actions/notification_actions';
import {newNotifications} from '../../util/selectors';

const mapStateToProps = ({entities, session, notifications}, ownProps) => {
    return  {currentUser: entities.users[session.id],
            profileUser: ownProps.user,
            newNotifications: newNotifications(notifications)


    };
};
const mapDispatchToProps = () => dispatch => ({
  logout: () => dispatch(logout()),
  uploadPicture: (picture, userId) => dispatch(uploadPicture(picture, userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  getUserPictures: (userId) => dispatch(getUserPictures(userId)),
  getUser: (userId) => dispatch(getUser(userId)),
  clearPictures: () => dispatch(clearPictures()),
  homePage: () => dispatch(homePage()),
  fetchNotifications: () => dispatch(fetchNotifications()),
  closeModal: () => dispatch(closeModal()),
  updateNotification: (notification) => dispatch(updateNotification(notification))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
