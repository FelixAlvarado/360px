import React from 'React';
import NavBarContainer from '../nav/nav_container';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="profile-holder">
        <NavBarContainer />
        <h1>Hello {this.props.currentUser.username}. This is your profile page.</h1>
      </div>
    );
  }
}

export default Profile;
