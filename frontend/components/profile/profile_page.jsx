import React from 'react';
import NavContainer from '../nav/nav_container';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="profile-holder">
        <NavContainer />
        <h1>Hello {this.props.currentUser.username}. {"This is your profile page."}</h1>
      </div>
    );
  }
}

export default ProfilePage;
