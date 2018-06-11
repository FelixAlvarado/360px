import React from 'react';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
      <button className="upload-cover-button"><i className="icon_upload fa fa-cloud-upload"></i>Upload Cover Picture</button>
      <button className="upload-profile-button"><i className="icon_upload fa fa-cloud-upload"></i>Upload Profile Picture</button>
      <p className="description">Add/Change Description</p>
      <form>
        <input type="text" className="description-input"/>
        <input type="submit" className="modal-upload-button" value="Submit Description"/>
      </form>
      </div>
    );
  }
}

export default EditUserForm;
