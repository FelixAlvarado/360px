import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import {profileList} from '../../util/selectors';
import {getUserPictures} from '../../actions/picture_actions';
import {getUser} from '../../actions/session_actions';
import { openModal} from '../../actions/modal_actions';

const mapStateToProps = ({entities}, ownProps) =>{
  const defaultUser = {username:""};
  return {
  userId: parseInt(ownProps.match.params.id),
  user: entities.users[parseInt(ownProps.match.params.id)] || defaultUser,
  pictures: profileList(entities.pictures)
          };
};

const mapDispatchToProps = () => dispatch => ({
getUserPictures: (userId) => dispatch(getUserPictures(userId)),
getUser: (userId) => dispatch(getUser(userId)),
openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
