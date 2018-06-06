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
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
}

demo(){
  const {formType} = this.props;
  if (formType === 'Log In'){
    return (
      <button onClick={() => this.props.processForm({username:"user1",password:"password"})}>Demo Login</button>
    );
  }
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
      <p>{this.demo()}</p>
      <p>{this.props.link}</p>
    </div>
  );
}
}

export default withRouter(SessionForm);
