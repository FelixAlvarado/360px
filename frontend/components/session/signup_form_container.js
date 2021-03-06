import { connect } from 'react-redux';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state,ownProps) => (
   {
  errors: state.errors.session,
  formType: 'Sign Up',
  link: <Link to='/login'>Log In </Link>,
  user: state.entities.users[state.session.id]
  }
);
const mapDispatchToProps = () => dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clear: () => dispatch(clearErrors()),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
