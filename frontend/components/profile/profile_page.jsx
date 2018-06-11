import React from 'react';
import NavContainer from '../nav/nav_container';
import PhotoListItem from './photo_list_item';
class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {user: this.props.user};
    this.updateFollow = this.updateFollow.bind(this);
  }

  componentDidMount () {
    this.props.getUserPictures(this.props.userId);
    this.props.getUser(this.props.userId);
    this.props.fetchFollows();

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
        <button onClick={() => this.updateFollow()} className="following"><span>Following</span></button>
      );
    } else if (currentUser.id !== user.id) {
      return (
        <button onClick={() =>this.updateFollow()} className="follow">Follow</button>
      );
    }
  }

  render() {
    const pictures = this.props.pictures.map((picture) => {
      return <PhotoListItem openModal={this.props.openModal} key={picture.id} picture={picture} user={this.props.user}/>;
        });
    return (
      <div className="profile-holder">
        <NavContainer user={this.props.user}/>
        <img className= "cover-photo" src="https://s33.postimg.cc/pkpqns48v/fifi.jpg" />
        <div className="profile-image-holder">
        <img className= "profile-pic" src="https://s33.postimg.cc/nk3sgiaa7/default_profile.jpg" />
        {this.followButton()}
        </div>
        <ul className="picture-list">
          <div className="list-holder">
          {pictures}
          </div>
        </ul>
      </div>
    );
  }
}

export default ProfilePage;
