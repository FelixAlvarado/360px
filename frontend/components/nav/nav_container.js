import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './nav_bar';

const mapStateToProps = (state,ownProps) => (
   {}
);
const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
