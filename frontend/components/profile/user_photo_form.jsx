import React from 'react';

class UserPhotoForm extends React.Component {

  constructor(props) {
    super(props);
  }

  title() {
    const {string} = this.props;
    if (string === 'uploadProfile'){
      return "Profile Picture";
    } else if (string === 'uploadCover'){
      return "Cover Photo";
    }
  }

  updateUser() {
    const {currentUser, string,url, updateUser, closeModal} = this.props;
    if (string === 'uploadCover') {
      updateUser({id: currentUser.id, username: currentUser.username, cover_url: url, profile_url: currentUser.profile_url});
    } else if (string === 'uploadProfile') {
      updateUser({id: currentUser.id, username: currentUser.username, cover_url: currentUser.cover_url, profile_url: url});
    }
    closeModal();
  }

  render() {
    const {url} = this.props;
    return (
      <div>
        <span className="close-font-upload"><i onClick={() => this.props.closeModal()} className="fa fa-close upload-close"></i></span>
        <p className="profile-title">{this.title()}</p>
        <img className="user-image" src={url}/>
            <br/>
        <button onClick={() => this.updateUser()} className= "modal-upload-button">Submit</button>
      </div>
    );
  }

}

export default UserPhotoForm;
