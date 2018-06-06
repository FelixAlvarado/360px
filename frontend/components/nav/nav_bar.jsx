import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  nav(){
    const path = this.props.match.path;
    if (path === "/"){
      return "nav_bar";
    }else if (path === "/login") {
      return "session_bar";
    }
  }

  logo(){
    const path = this.props.match.path;
    if (path === "/"){
      return "logo";
    }else if (path === "/login") {
      return "session_logo";
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
    }
  }



render() {
  return (
    <nav className={this.nav()}>
      <ul className="left_nav">
      <li><Link to="/" className={this.logo()}>360px</Link></li>
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
