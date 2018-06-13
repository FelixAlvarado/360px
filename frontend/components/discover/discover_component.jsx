import React from 'react';
import NavContainer from '../nav/nav_container';

class DiscoverComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const {fetchFollows, discoverFeed, fetchUsers} = this.props;

    fetchFollows();
    discoverFeed();
    fetchUsers();
  }

  render() {
    return (
      <div className="discover-holder">
        <NavContainer />
          <div className="discover-top-div">
            <h1>The newest Pictures</h1>
            <p>Discover the the freshest photos just added to 360px</p>
          </div>
      </div>
    );
  }
}

export default DiscoverComponent;
