import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import {profileList} from '../../util/selectors';
import {getUserPictures} from '../../actions/picture_actions';

const mapStateToProps = ({entities, session}) => ({
  currentUser: entities.users[session.id],
  pictures: profileList(entities.pictures)
});

const mapDispatchToProps = () => dispatch => ({
getUserPictures: (userId) => dispatch(getUserPictures(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
