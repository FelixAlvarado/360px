import React from 'react';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: this.props.user.description};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    return (e) => {
      return this.setState({description: e.target.value});
    };
  }

  handleSubmit() {
    const {updateUser, user,closeModal} = this.props;
    updateUser({id: user.id, username: user.username, description: this.state.description, cover_url: user.cover_url, profile_url: user.profile_url});
    closeModal();
  }

  handleUpload(e, string) {
    this.props.closeModal();
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, picture) => {
      if (error === null){
            this.props.openModal({string:string, picture: picture[0]});

          }
      });
  }



  render() {
    return(
      <div>
      <span className="close-font-upload"><i onClick={() => this.props.closeModal()} className="fa fa-close edit-close"></i></span>
      <button className="upload-cover-button" onClick={(e) => this.handleUpload(e,'uploadCover')}><i className="icon_upload fa fa-cloud-upload"></i>Upload Cover Picture</button>
      <button className="upload-profile-button" onClick={(e) => this.handleUpload(e, 'uploadProfile')}><i className="icon_upload fa fa-cloud-upload"></i>Upload Profile Picture</button>
      <p className="description">Add/Change Description</p>
      <form onSubmit={() => this.handleSubmit()}>
        <input type="text" className="description-input" onChange={this.handleChange()} value={this.state.description}/>
        <input type="submit" className="modal-upload-button" value="Submit Description"/>
      </form>
      </div>
    );
  }
}

export default EditUserForm;
