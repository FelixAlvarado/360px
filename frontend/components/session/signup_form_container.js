import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  link: <Link to='/login'>Log In </Link>,
  user: state.entities.users[state.session.id]
});
const mapDispatchToProps = () => dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
