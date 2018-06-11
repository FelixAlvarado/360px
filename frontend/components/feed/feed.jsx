import React from 'react';
import NavContainer from '../nav/nav_container';
import {Link} from 'react-router-dom';
import FeedListItem from './feed_list_item';

class FeedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const {fetchFollows, homeFeed, fetchUsers} = this.props;
    fetchFollows();
    homeFeed();
    fetchUsers();
  }

  render(){
    const {users,clearPictures, openModal} = this.props;
    const pictures = this.props.pictures.map((picture) => {
      return <FeedListItem key={picture.id} picture={picture} user={users[picture.uploader_id]} clearPictures={clearPictures} openModal={openModal}/>;
    });
    return(
      <div className="feed-container">
        <NavContainer/>
        <ul className="feed-list">
          {pictures}
        </ul>
      </div>
    );
  }
}

export default FeedComponent;
