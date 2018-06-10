import React from 'react';
import {Link} from 'react-router-dom';
class ShowPictureComponent extends React.Component {
  constructor(props){
    super(props);
  }

  nameLink() {
    if (this.props.picture.uploader_id === this.props.currentUser.id) {
      return "default-cursor";
    }
  }
  render() {
    return (
      <div className="show-div">

        <div className="show-child-1"><img className='show-image' src={`${this.props.picture.image_url}`}/></div>
          <div className="show-child-2">
            <p> <img className = "image-placeholder" src="https://s15.postimg.cc/8agnin31n/seth_curry.jpg" />
            <span className="show-username"><Link className={`show-link ${this.nameLink()}`} to={`/profile/${this.props.user.id}`} >{this.props.user.username}</Link></span></p>
            <h2 className="show-title">{this.props.picture.title}</h2>
            <div className="button-holder">
              <button className="button1">Edit</button>
              <button className="button2">Delete</button>
            </div>

        </div>
      </div>
    );
  }
}

export default ShowPictureComponent;
