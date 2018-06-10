import React from 'react';
import NavContainer from '../nav/nav_container';
import PhotoListItem from './photo_list_item';
class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {user: this.props.user};
  }

  componentDidMount () {
    this.props.getUserPictures(this.props.userId);
    this.props.getUser(this.props.userId);
    this.props.fetchFollows();
  }

  changeClass() {
    if (this.props.pictures.length > 8){
      return "profile-holder";
    } else {
      return "profile-holder2";
    }
  }

  render() {
        console.log(this.props.follow);
    const pictures = this.props.pictures.map((picture) => {
      return <PhotoListItem openModal={this.props.openModal} key={picture.id} picture={picture} user={this.props.user}/>;
        });
    return (
      <div className={`${this.changeClass()}`}>
        <NavContainer user={this.props.user}/>
        <h1>Hello {this.props.user.username}. {"This is your profile page."}</h1>
        <ul className="picture-list">
          {pictures}
        </ul>
      </div>
    );
  }
}

export default ProfilePage;
