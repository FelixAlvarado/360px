import React from 'react';
import NavContainer from '../nav/nav_container';
import {Link} from 'react-router-dom';

class FeedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchFollows();
  }

  updateState(num){
    this.props.getUserPictures(num);
    this.props.getUser(num);
  }

  render(){
    return(
      <div className="feed-container">
        <NavContainer/>
          <h1>You made it to the feed page!</h1>
          <p>The following is {'for'} follow testing:</p>
          <Link onClick={() => this.updateState(4)} to={`/profile/${4}`}>Allen</Link>
          <br/>
          <br/>
          <Link onClick={() => this.updateState(5)} to={`/profile/${5}`}>Bob</Link>
          <br/>
          <br/>
          <Link onClick={() => this.updateState(6)} to={`/profile/${6}`}>Steve</Link>
          <br/>
          <br/>
      </div>
    );
  }
}

export default FeedComponent;
