import { connect } from 'react-redux';
import React from 'react';
import PictureForm from '../upload/picture_form';
import { closeModal } from '../../actions/modal_actions';
import {updatePicture} from '../../actions/picture_actions';

const mapStateToProps = ({session, entities:{users},ui:{modal}}) => (
   {
     currentUser: users[session.id],
     picture: modal.picture
   }
);
const mapDispatchToProps = () => dispatch => ({
  action: (picture) => dispatch(updatePicture(picture)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PictureForm);
