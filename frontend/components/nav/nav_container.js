import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './nav_bar';
import {uploadPicture} from '../../actions/picture_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({entities, session}) => (
   {
     currentUser: entities.users[session.id],
     picture: entities
   }
);
const mapDispatchToProps = () => dispatch => ({
  logout: () => dispatch(logout()),
  uploadPicture: (picture, userId) => dispatch(uploadPicture(picture, userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
