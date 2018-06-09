import React from 'react';

class ShowPictureComponent extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.picture);
  }
  render() {
    return (
      <div>
        <h2 className="show-title">{this.props.picture.title}</h2>
        <img className="show-image" src={`${this.props.picture.image_url}`}/>
      </div>
    );
  }
}

export default ShowPictureComponent;
