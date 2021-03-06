import { connect } from 'react-redux';
import React from 'react';
import EditUserForm from './edit_user_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/session_actions';
import {fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions';

const mapStateToProps = ({follows, session, entities:{users},ui:{modal}}, ownProps) => {
   return {
     user: modal.user
   };
};
const mapDispatchToProps = () => dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: (object) => dispatch(openModal(object)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
