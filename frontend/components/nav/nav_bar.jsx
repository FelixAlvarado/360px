import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {

  componentDidMount() {
    if(this.props.currentUser){
      this.props.fetchNotifications();
    }
  }


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
    else if (path.includes("profile") || path === "/discover" || path === "/notifications") {
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

  // updateState(num){
  //   this.props.clearPictures();
  //   this.props.getUserPictures(num);
  //   this.props.getUser(num);
  // }


  sideLink(){
    const path = this.props.match.path;
    const{getUserPictures, currentUser, clearPictures} = this.props;
    if (path === "/"){
      return (
        <Link className="nav_login" to="/login">Log in</Link>
      );
    }   else if (path === "/feed" || path.includes("profile") || path === "/discover" || path === "/notifications") {
      const defaultProfile = this.props.currentUser.profile_url || "https://res.cloudinary.com/dbm56y2y/image/upload/v1529040240/default_profile.jpg";
          return (
            <div className="side-holder">
            <Link onClick={() => clearPictures()} to={`/profile/${this.props.currentUser.id}`} className = "profile-link"><img className="profile-icon" src={defaultProfile} /></Link>
              <ul className="profile-list">
                <li className="first-item-list"><Link onClick={() => clearPictures()} to={`/profile/${currentUser.id}`} className = "profile-link">Profile</Link></li>
                <li onClick={() => this.handleLogout()}>Logout</li>
              </ul>
            </div>
          );
        }
  }

  handleLogout() {
    this.props.closeModal();
    this.props.logout();

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
    }else if (path === "/feed" || path.includes("profile") || path === "/discover" || path === "/notifications") {
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
  discover() {
    const path = this.props.match.path;
    if (path === "/" || path === "/login" || path === "/signup") {
      return (<li className="discover-hidden">Discover</li>);
    } else if (path === "/feed" || path.includes("profile") || path === "/notifications"){
      return (<li className="discover"><Link onClick={() => this.props.clearPictures()} className="discover-text" to="/discover">Discover</Link></li>);
    } else if (path === "/discover") {
      return (<li className="discover-no-link">Discover</li>);
    }
  }

  bell() {
    const {openModal, newNotifications} = this.props;
    const path = this.props.match.path;
    const length = this.props.newNotifications.length;
    if (length === 0 && (path === "/feed" || path.includes("profile") || path === "/discover" || path === "/notifications") ) {
      return (<span onClick={() => openModal({string: 'notify', newNotifications: newNotifications})} className="bell"><i className="fa fa-bell-o"></i></span>);
    } else if (length > 0 && (path === "/feed" || path.includes("profile") || path === "/discover" || path === "/notifications") ) {
      return (<div onClick={() => this.notifyClick()} className="notify"><span className="notiNumber">{length}</span></div>);

    }
  }

  notifyClick() {
    const {newNotifications,updateNotification, openModal} = this.props;
    newNotifications.forEach((n) => {
      updateNotification({id:n.id, viewed: true});
    });
    openModal({string: 'notify', newNotifications: newNotifications})
  }

  rightNav() {
        const path = this.props.match.path;
    if (path === "/" || path === "/login" || path === "/signup"){
      return "right_nav";
    } else {
      return "login-right-nav";
    }
  }


render() {
  return (
    <nav className={this.nav()}>
      <ul className={this.leftNav()}>
      <li>{this.logo()}</li>
      {this.discover()}
      </ul>
      <ul className={this.rightNav()}>
        <li>{this.sideLink()}</li>
        <li>{this.bell()}</li>
        <li>{this.sideButton()}</li>
      </ul>
    </nav>
  );
}
}

export default withRouter(NavBar);
