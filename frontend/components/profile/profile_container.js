import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import {profileList, findFollow} from '../../util/selectors';
import {getUserPictures} from '../../actions/picture_actions';
import {getUser} from '../../actions/session_actions';
import { openModal} from '../../actions/modal_actions';
import {fetchFollows} from '../../actions/follow_actions';


const mapStateToProps = ({entities, session, follows}, ownProps) =>{
  const defaultUser = {username:""};
  return {
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
fetchFollows: (follows) => dispatch(fetchFollows(follows))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
