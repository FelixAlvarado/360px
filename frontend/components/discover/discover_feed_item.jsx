import React from 'react';

class DiscoverFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {picture, openModal, user} = this.props;
    return (
      <li onClick={() => openModal({string:'show',picture: picture, user: user})}><img className="discover-photo" src={picture.image_url}/></li>
    );
  }
}

export default DiscoverFeedItem;
