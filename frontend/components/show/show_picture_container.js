import { connect } from 'react-redux';
import React from 'react';
import {findFollow} from '../../util/selectors';
import ShowPictureComponent from './show_picture';
import { closeModal, openModal } from '../../actions/modal_actions';
import {deletePicture, updatePicture} from '../../actions/picture_actions';
import {fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions';

const mapStateToProps = ({follows, session, entities:{users},ui:{modal}}, ownProps) => {
   return {
     currentUser: users[session.id],
     picture: modal.picture,
     user: modal.user,
     follow: findFollow(follows,session.id, parseInt(modal.picture.uploader_id))
   };
};
const mapDispatchToProps = () => dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deletePicture: (photoId) => dispatch(deletePicture(photoId)),
  updatePicture: (photo) => dispatch(updatePicture(photo)),
  openModal: (object) => dispatch(openModal(object)),
  fetchFollows: (follows) => dispatch(fetchFollows(follows)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (id) => dispatch(deleteFollow(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPictureComponent);
