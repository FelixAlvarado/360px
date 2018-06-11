import React from 'react';

class PictureForm extends React.Component {
  constructor(props){
    super(props);
    const title = this.props.picture.title || "";
    this.state = {title:title};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    return (e) => {
      this.setState({title:e.target.value});
    };
  }

  handleSubmit() {

    const {picture, currentUser, closeModal, action} = this.props;
    if (picture.url){
    action({title: this.state.title, image_url:picture.url}, currentUser.id);
  } else if (picture.image_url) {
    action({id: picture.id, title: this.state.title, image_url:picture.url, uploader_id: picture.uploader_id});
  }
    closeModal();
  }

  render() {
    const url = this.props.picture.image_url || this.props.picture.url;
  return (
    <div>
      <span className="close-font-upload"><i onClick={() => this.props.closeModal()} className="fa fa-close upload-close"></i></span>
      <img className="form-image" src={url}/>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label className="upload-label">Title</label>
          <br/>
          <input className="upload-input" placeholder="(optional)" type="text" value={this.state.title} onChange={this.handleChange()} />
          <br/>
          <input className= "modal-upload-button" type="submit" />
        </form>
    </div>
    );
  }
}
export default PictureForm;
