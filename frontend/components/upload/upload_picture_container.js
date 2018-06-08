import { connect } from 'react-redux';
import React from 'react';
import PictureForm from './picture_form';
import { closeModal } from '../../actions/modal_actions';
import {uploadPicture} from '../../actions/picture_actions';

const mapStateToProps = ({session, entities:{users},ui:{modal}}) => (
   {
     currentUser: users[session.id],
     picture: modal.picture
   }
);
const mapDispatchToProps = () => dispatch => ({
  uploadPicture: (picture, userId) => dispatch(uploadPicture(picture, userId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PictureForm);
