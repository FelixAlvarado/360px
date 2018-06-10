import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import {profileList, findFollow} from '../../util/selectors';
import {getUserPictures} from '../../actions/picture_actions';
import {getUser} from '../../actions/session_actions';
import { openModal} from '../../actions/modal_actions';
import {fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions';


const mapStateToProps = ({entities, session, follows}, ownProps) =>{
  const defaultUser = {id: "",username:""};
  return {
  currentUser: entities.users[session.id],
  userId: parseInt(ownProps.match.params.id),
  user: entities.users[parseInt(ownProps.match.params.id)] || defaultUser,
  pictures: profileList(entities.pictures),
  follow: findFollow(follows,session.id, parseInt(ownProps.match.params.id))
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
