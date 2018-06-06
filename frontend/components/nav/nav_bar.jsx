import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
render() {
  return (
    <nav>
      <Link to="/">360 px</Link>
      <ul>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
      </ul>
    </nav>
  );
}
}

export default withRouter(NavBar);
