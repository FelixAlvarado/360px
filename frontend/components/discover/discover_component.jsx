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
      <div>
      <NavContainer />
        <h1 className="h1">
          Made it
        </h1>
      </div>
    );
  }
}

export default DiscoverComponent;
