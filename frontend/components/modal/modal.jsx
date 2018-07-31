import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UploadPictureContainer from '../upload/upload_picture_container';
import EditPictureContainer from '../show/edit_picture_container';
import ShowPictureContainer from '../show/show_picture_container';
import {Animated} from "react-animated-css";
import EditUserContainer from '../profile/edit_user_container';
import UserPhotoContainer from '../profile/user_photo_container';
import NotificationModalContainer from '../notification/notification_modal_container';


const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.string) {
    case 'upload':
      component = <UploadPictureContainer />;
      break;
      case 'edit':
        component = <EditPictureContainer />;
        break;
    case 'show':
      component = <ShowPictureContainer />;
      break;
    case 'editUser':
      component = <EditUserContainer />;
      break;
    case 'uploadProfile':
        component = <UserPhotoContainer />;
      break;
    case 'uploadCover':
        component = <UserPhotoContainer />;
      break;
      case 'notify':
          component = <NotificationModalContainer />;
        break;
    default:
      return null;
  }
if (modal.string === 'upload' || modal.string === 'edit' ){
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
} else if (modal.string === 'show') {
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child-show" onClick={e => e.stopPropagation()}>
          { component }
      </div>
    </div>
  );
} else if ( modal.string === 'editUser') {
  return (
  <div className="modal-background" onClick={closeModal}>
    <div className="modal-child-edit" onClick={e => e.stopPropagation()}>
      { component }
    </div>
  </div>
);
} else if ( modal.string ==='uploadProfile' || modal.string === 'uploadCover' ) {
  return (
  <div className="modal-background" onClick={closeModal}>
    <div className="modal-child-user" onClick={e => e.stopPropagation()}>
      { component }
    </div>
  </div>
);
} else if ( modal.string ==='notify' ) {
  return (
  // <div className="modal-background2" onClick={closeModal}>
    <div className="modal-child-notify" onClick={e => e.stopPropagation()}>
      { component }
    </div>
  // </div>
);
}
};

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
