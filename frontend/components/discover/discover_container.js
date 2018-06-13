import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DiscoverComponent from './discover_component';
import {getUserPictures, discoverFeed} from '../../actions/picture_actions';
import {fetchUsers} from '../../actions/session_actions';
import {fetchFollows} from '../../actions/follow_actions';
import {pictureList} from '../../util/selectors';
import {clearPictures} from '../../actions/picture_actions';
import { openModal} from '../../actions/modal_actions';

const mapStateToProps = ({follows, entities, session}) => ({
  currentUser: entities.users[session.id],
  pictures: pictureList(entities.pictures),
  users: entities.users,
  follows: follows
});

const mapDispatchToProps = () => dispatch => ({
  getUserPictures: (userId) => dispatch(getUserPictures(userId)),
  fetchFollows: (follows) => dispatch(fetchFollows(follows)),
  discoverFeed: () => dispatch(discoverFeed()),
  fetchUsers: () => dispatch(fetchUsers()),
  clearPictures: () => dispatch(clearPictures()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverComponent);
