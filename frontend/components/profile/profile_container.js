import { connect } from 'react-redux';
import ProfilePage from './profile_page';

const mapStateToProps = ({entities, session}) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, null)(ProfilePage);
