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
          <Link onClick={() => this.updateState(1)} to={`/profile/${1}`}>User1</Link>
          <br/>
          <br/>
          <Link onClick={() => this.updateState(2)} to={`/profile/${2}`}>User2</Link>
          <br/>
          <br/>
          <Link onClick={() => this.updateState(3)} to={`/profile/${3}`}>User3</Link>
          <br/>
          <br/>
      </div>
    );
  }
}

export default FeedComponent;
