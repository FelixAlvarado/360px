import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Feed from './feed';
import {getUserPictures} from '../../actions/picture_actions';
import {getUser} from '../../actions/session_actions';

const mapStateToProps = ({entities, session}) => ({
});

const mapDispatchToProps = () => dispatch => ({
  getUserPictures: (userId) => dispatch(getUserPictures(userId)),
  getUser: (userId) => dispatch(getUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
