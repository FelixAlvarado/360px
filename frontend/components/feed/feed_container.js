import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Feed from './feed';

const mapStateToProps = ({entities, session}) => ({
});

const mapDispatchToProps = () => dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
