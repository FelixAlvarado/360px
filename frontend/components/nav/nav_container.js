import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './nav_bar';


const mapStateToProps = (state,ownProps) => (
   {}
);
const mapDispatchToProps = () => dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
