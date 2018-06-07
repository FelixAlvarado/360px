import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  nav(){
    const path = this.props.match.path;
    if (path === "/"){
      return "nav_bar";
    }else if (path === "/login" || path === "/signup") {
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
  }

  sideLink(){
    const path = this.props.match.path;
    if (path === "/"){
      return (
        <Link className="nav_login" to="/login">Log in</Link>
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
    }
  }

  leftNav(){
    const path = this.props.match.path;
    if (path === "/"){
      return "left_nav";
    }else if (path === "/login" || path === "/signup") {
      return "login_left";
    }
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
