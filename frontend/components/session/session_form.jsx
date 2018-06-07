import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavContainer from '../nav/nav_container';
import {Redirect} from 'react-router';

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

  componentDidMount () {
    this.props.clear();
  }



  handleSubmit() {
    const username = this.state.username;
    const password = this.state.password;
   this.props.processForm(this.state);
  return (
  <Redirect to="/feed"/>
  );
}

  handleChange(field) {
    return (e) => {
    this.setState({[field]: e.target.value});
  };
  }

  listErrors() {
    if (this.props.errors.length > 0){
  return(
    <ul className="session_errors">
      {this.props.errors.map((error,i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
}
}

demo(){
  const {formType} = this.props;
  if (formType === 'Log In'){
    return (
      <button className="demo_login" onClick={() => this.props.processForm({username:"user12",password:"password"})}>Demo Login</button>
    );
  }
}

bottomLink() {
  const {formType} = this.props;
  if (formType === 'Log In'){
    return (
      <p className="signup_link">Don't have an account? {this.props.link}</p>
    );
  } else {
    return (
    <p className="signup_link">Already have an account? {this.props.link}</p>
    );
  }
}

render(){

  const {formType} = this.props;
  return (
    <div className="session_container">
      <NavContainer/>
        <div className="error_holder">
        {this.listErrors()}
        </div>
      <div className="session_form">
      <h2 className="session_header">{formType}</h2>
      <br/>

      <label>Username:</label>
        <br/>
      <input type="text" onChange={this.handleChange('username')} value={this.state.username}/>
      <br/>
      <label>Password:</label>
      <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
      <br/>
      <button className="login_login" onClick={() => this.handleSubmit()}>{formType}</button>
      <br/>
      {this.demo()}
      {this.bottomLink()}
      </div>
    </div>
  );
}
}

export default withRouter(SessionForm);
