import React from 'react';
import {Link} from 'react-router-dom';
class ShowPictureComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete.bind(this);
  }

  nameLink() {
    if (this.props.picture.uploader_id === this.props.currentUser.id) {
      return "default-cursor";
    }
  }

  buttonDisplay() {
    if (this.props.currentUser.id === this.props.picture.uploader_id){
      return (
        <div>
        <button onClick={() => this.handleEdit()}  className="button1">Edit</button>
        <button onClick={() => this.handleDelete()} className="button2">Delete</button>
        </div>
      );
    }
  }
  handleDelete() {
    this.props.deletePicture(this.props.picture.id);
    this.props.closeModal();
  }

  handleEdit() {
    this.props.closeModal();
    this.props.openModal({string:'edit', picture:this.props.picture});
  }

  updateFollow(){
    const {deleteFollow, createFollow, follow, user, currentUser} = this.props;
    if (follow){
      deleteFollow(follow.id);
    } else {
      createFollow({leader_id: user.id, follower_id: currentUser.id});
    }
  }

  followButton() {
    const {follow,currentUser,user} = this.props;
    if (follow && currentUser.id !== user.id){
      return (
        <button onClick={() => this.updateFollow()} className="show-following"><span>Following</span></button>
      );
    } else if (currentUser.id !== user.id) {
      return (
        <button onClick={() =>this.updateFollow()} className="show-follow">Follow</button>
      );
    }
  }

  render() {
    const defaultProfile = this.props.currentUser.profile_url || "https://s15.postimg.cc/h65vznrt7/default_profile.jpg";
    return (
      <div className="show-div">

        <div className="show-child-1"><img className='show-image' src={`${this.props.picture.image_url}`}/></div>
          <div className="show-child-2">
            <p> <img className = "image-placeholder" src={defaultProfile} />
            <span className="show-username"><Link className={`show-link ${this.nameLink()}`} to={`/profile/${this.props.user.id}`} >{this.props.user.username}</Link></span>{this.followButton()}</p>

            <h1 className="show-title">{this.props.picture.title}</h1>
            <div className="button-holder">
              {this.buttonDisplay()}
            </div>

        </div>
      </div>
    );
  }
}

export default ShowPictureComponent;
