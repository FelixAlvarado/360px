import { connect } from 'react-redux';
import React from 'react';
import UserPhotoForm from './user_photo_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/session_actions';
import {fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions';

const mapStateToProps = ({follows, session, entities:{users},ui:{modal}}, ownProps) => {
   return {
     string: modal.string,
     url: modal.picture.url,
     currentUser: users[session.id]
   };
};
const mapDispatchToProps = () => dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: (object) => dispatch(openModal(object)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPhotoForm);
