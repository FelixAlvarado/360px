import React from 'react';

class ShowPictureComponent extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="show-div">

          <div className="show-child-1"><img className="show-image" src={`${this.props.picture.image_url}`}/></div>
        <div className="show-child-2">
          <p><div class="image-placeholder"></div><span className="show-username">{this.props.user.username}</span></p>
          <h2 className="show-title">{this.props.picture.title}</h2>
        </div>

      </div>
    );
  }
}

export default ShowPictureComponent;
