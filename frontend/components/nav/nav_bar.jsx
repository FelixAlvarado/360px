import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {

  nav(){
    const path = this.props.match.path;
    if (path === "/"){
      return "nav_bar";
    }else {
      return "session_bar";
    }
  }

  logo(){

    const path = this.props.match.path;
    if (path === "/"){
      return (
        <Link to="/" className="logo">360px</Link>
      );
    }else if (path === "/login" || path === "/signup") {
      return (
        <Link to="/" className="session_logo">360px</Link>
      );
    }
    else if (path === "/feed") {
      return (
        <span className="feed_logo">360px</span>
      );
    }
    else if (path.includes("profile")) {
      return (
        <Link to="/feed" onClick={() => this.props.clearPictures()} className="profile_logo">360px</Link>
      );
    }
  }

  prepareFeed() {
    // const {clearPictures, homePage} = this.props;
    // clearPictures();
    // homePage();
  }

  updateState(num){
    // this.props.clearPictures();
    // this.props.getUserPictures(num);
    // this.props.getUser(num);

  }

  sideLink(){
    const path = this.props.match.path;
    if (path === "/"){
      return (
        <Link className="nav_login" to="/login">Log in</Link>
      );
    }   else if (path === "/feed" || path.includes("profile")) {
      const defaultProfile = this.props.currentUser.profile_url || "https://s15.postimg.cc/h65vznrt7/default_profile.jpg";
          return (
            <div className="side-holder">
            <Link to={`/profile/${this.props.currentUser.id}`} className = "profile-link"><img className="profile-icon" src={defaultProfile} /></Link>
              <ul className="profile-list">
                <li><Link to={`/profile/${this.props.currentUser.id}`} className = "profile-link">Profile</Link></li>
                <li onClick={() => this.props.logout()}>Logout</li>
              </ul>
            </div>
          );
        }
  }

  sideButton() {
    const path = this.props.match.path;
    if (path === "/"){
      return (
        <Link to="/signup"><button className="nav_button">Sign up</button></Link>
      );
    }else if (path === "/login") {
      return (
        <Link to="/signup"><button className="login_signup">Sign up</button></Link>
      );
    } else if (path === "/signup") {
      return (
        <Link to="/login"><button className="login_signup">Login</button></Link>
      );
    }else if (path === "/feed" || path.includes("profile")) {
      return (
        <button onClick={(e) => this.uploadPicture(e)} className="upload"><i className="icon_upload fa fa-cloud-upload"></i>   <span className="font_overide">Upload</span></button>
      );
    }
  }

  leftNav(){
    const path = this.props.match.path;
    if (path === "/"){
      return "left_nav";
    }else  {
      return "login_left";
    }
  }

  uploadPicture(e) {
    e.preventDefault();
    const currentUserId = this.props.currentUser.id;
    cloudinary.openUploadWidget(window.cloudinary_options, (error, picture) => {
      if (error === null){
            this.props.openModal({string:'upload', picture: picture[0]});
      }
    });
  }


render() {
  return (
    <nav className={this.nav()}>
      <ul className={this.leftNav()}>
      <li>{this.logo()}</li>
      </ul>
      <ul className="right_nav">
        <li>{this.sideLink()}</li>
        <li>{this.sideButton()}</li>
      </ul>
    </nav>
  );
}
}

export default withRouter(NavBar);
