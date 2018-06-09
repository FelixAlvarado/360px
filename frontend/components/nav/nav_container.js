import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './nav_bar';
import {uploadPicture} from '../../actions/picture_actions';
import { openModal} from '../../actions/modal_actions';
import {getUserPictures, clearPictures} from '../../actions/picture_actions';
import {getUser} from '../../actions/session_actions';


const mapStateToProps = ({entities, session}, ownProps) => {
    return  {currentUser: entities.users[session.id],
            profileUser: ownProps.user
    };
};
const mapDispatchToProps = () => dispatch => ({
  logout: () => dispatch(logout()),
  uploadPicture: (picture, userId) => dispatch(uploadPicture(picture, userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  getUserPictures: (userId) => dispatch(getUserPictures(userId)),
  getUser: (userId) => dispatch(getUser(userId)),
  clearPictures: () => dispatch(clearPictures())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
