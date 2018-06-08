import React from 'react';
import NavContainer from '../nav/nav_container';
import PhotoListItem from './photo_list_item';
class ProfilePage extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount () {
    this.props.getUserPictures(this.props.currentUser.id);
  }

  render() {
    const pictures = this.props.pictures.map((picture) => {
      return <PhotoListItem key={picture.id} picture={picture}/>;
        });
    return (
      <div className="profile-holder">
        <NavContainer />
        <h1>Hello {this.props.currentUser.username}. {"This is your profile page."}</h1>
        <ul className="picture-list">
          {pictures}
        </ul>
      </div>
    );
  }
}

export default ProfilePage;
