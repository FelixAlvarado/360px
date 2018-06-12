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

  holderClass() {
      if (this.props.pictures.length < 5 && !this.props.user.cover_url) {
        return "profile-holder2";
      } else {
        return "profile-holder";
      }

  }

  updateFollow(){
    const {deleteFollow, createFollow, follow, user, currentUser} = this.props;
    if (follow){
      deleteFollow(follow.id);
    } else {
      createFollow({leader_id: user.id, follower_id: currentUser.id});
    }
  }

  profileButton() {
    const {follow,currentUser,user, openModal} = this.props;
    const followButtonClass = this.determineClass();
    const followingButtonClass = this.determineFollowingClass();
    if (follow && currentUser.id !== user.id){
      console.log('my page and following');
      return (
        <button onClick={() => this.updateFollow()} className={followingButtonClass}><span>Following</span></button>
      );
    } else if (currentUser.id !== user.id) {
      console.log('not my page and not following');
      return (
        <button onClick={() =>this.updateFollow()} className={followButtonClass}>Follow</button>
      );
    } else if (currentUser.id === user.id) {
      console.log('my page');
      return (
        <button onClick={() => openModal({string:'editUser', user: currentUser})} className={followButtonClass}>Edit</button>
      );
    }
  }

  determineFollowingClass() {
    const {user} = this.props;
      if (user.cover_url) {
        return "following";
      } else {
        return  "following2";
      }
  }

  determineClass() {
    const {user} = this.props;
      if (user.cover_url) {
        return "follow";
      } else {
        return  "follow2";
      }
  }

  userDescription() {
    const {user} = this.props;
    if (user.description){
      return (
        <p className="profile-description" >{user.description}</p>
      );
    }
  }

  cover() {
    const {user} = this.props;
    if (user.cover_url){
      return(
        <img className= "cover-photo" src={user.cover_url} />
      );
    } else {
      return (
        <div className= "cover-div" ></div>
      );
    }
  }

  render() {
    const {openModal, user, followers, following} = this.props;
    const profileUrl = user.profile_url || "https://s33.postimg.cc/nk3sgiaa7/default_profile.jpg";
    const pictures = this.props.pictures.map((picture) => {
      if (user.id === picture.uploader_id){
        return <PhotoListItem openModal={openModal} key={picture.id} picture={picture} user={user}/>;
      }
        });
    return (
      <div className={this.holderClass()}>
        {this.profileButton()}
        <NavContainer user={user}/>
        {this.cover()}
        <div className="profile-image-holder">
        <img className= "profile-pic" src={profileUrl} />
        </div>
        <p className="profile-title" >{user.username}</p>
        <p className="profile-description" >{user.description}</p>
        <p className="profile-follow" ><span className="number">{followers}</span> Followers <span className="number">   {following}</span> Following</p>
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
