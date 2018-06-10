import { connect } from 'react-redux';
import React from 'react';
import ShowPictureComponent from './show_picture';
import { closeModal } from '../../actions/modal_actions';
import {deletePicture, updatePicture} from '../../actions/picture_actions';

const mapStateToProps = ({session, entities:{users},ui:{modal}}) => (
   {
     currentUser: users[session.id],
     picture: modal.picture,
     user: modal.user
   }
);
const mapDispatchToProps = () => dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deletePicture: (photoId) => dispatch(deletePicture(photoId)),
  updatePicture: () => dispatch(updatePicture())

});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPictureComponent);
