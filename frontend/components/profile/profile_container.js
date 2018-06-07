import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile_page';

const mapStateToProps = ({entities, session}) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = () => dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
