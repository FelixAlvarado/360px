import React from 'react';
import NavContainer from '../nav/nav_container';
import DiscoverFeedItem from './discover_feed_item';

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
    const {pictures, follows, currentUser, users, clearPictures, openModal, parseUrl} = this.props;
    const pictureList = pictures.map((picture =>{
      return( <DiscoverFeedItem key={picture.id} picture={picture} follows={follows} currentUser={currentUser} user={users[picture.uploader_id]} clearPitures={clearPictures} parseUrl={parseUrl} openModal={openModal} />);
    }));
    return (
      <div className="discover-holder">
        <NavContainer />
          <div className="discover-top-div">
            <h1>The Newest Pictures</h1>
            <p>Discover the the freshest photos just added to 360px</p>
          </div>
          <ul className="discover-picture-list">
            <div className="discover-list-holder">
              {pictureList}
            </div>
          </ul>
          <div className="profile-footer">
          </div>
      </div>
    );
  }
}

export default DiscoverComponent;
