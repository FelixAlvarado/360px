import React from 'react';
import { Link } from 'react-router-dom';

const greeting = (props) => {
  if (props.currentUser){
    return (
      <div>
        <h1>Welcome {props.currentUser.username}!!!</h1>
        <button onClick={() => props.logout()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome!! Your can log in or sign up here :</h1>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
};

export default greeting;
