import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
  // e.preventDefault();
  this.props.processForm(this.state);
}

  handleChange(field) {
    return (e) => {
    this.setState({[field]: e.target.value});
  };
  }

  listErrors() {
  return(
    <ul>
      {this.props.errors.map((error,i) => (
        <li key={{i}}>{error}</li>
      ))}
    </ul>
  );
}

render(){

  const {formType} = this.props;
  return (
    <div>

      <h1>{formType}</h1>
      {this.listErrors()}
      <label>Username:
      <input type="text" onChange={this.handleChange('username')} value={this.state.username}/>
      </label>
      <label>Password:
      <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
      </label>
      <button onClick={() => this.handleSubmit()}>{formType}</button>
      <p>{this.props.link}</p>
    </div>
  );
}
}

export default withRouter(SessionForm);
