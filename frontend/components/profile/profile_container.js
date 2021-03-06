import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import {pictureList, findFollow, getFollowers, getFollowings, parseUrl} from '../../util/selectors';
import {getUserPictures} from '../../actions/picture_actions';
import {getUser} from '../../actions/session_actions';
import { openModal} from '../../actions/modal_actions';
import {fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions';
import {createNotification} from '../../util/notification_util';

const mapStateToProps = ({entities, session, follows}, ownProps) =>{
  const defaultUser = {id: "",username:""};
  return {
  currentUser: entities.users[session.id],
  userId: parseInt(ownProps.match.params.id),
  user: entities.users[parseInt(ownProps.match.params.id)] || defaultUser,
  pictures: pictureList(entities.pictures),
  follow: findFollow(follows,session.id, parseInt(ownProps.match.params.id)),
  followers: getFollowers(follows,parseInt(ownProps.match.params.id)),
  following: getFollowings(follows,parseInt(ownProps.match.params.id)),
  parseUrl: parseUrl,
  createNotification: createNotification
          };
};

const mapDispatchToProps = () => dispatch => ({
getUserPictures: (userId) => dispatch(getUserPictures(userId)),
getUser: (userId) => dispatch(getUser(userId)),
openModal: (modal) => dispatch(openModal(modal)),
fetchFollows: (follows) => dispatch(fetchFollows(follows)),
createFollow: (follow) => dispatch(createFollow(follow)),
deleteFollow: (id) => dispatch(deleteFollow(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
