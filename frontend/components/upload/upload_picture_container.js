import { connect } from 'react-redux';
import React from 'react';
import PictureForm from './picture_form';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({entities, session}) => (
   {
     currentUser: entities.users[session.id]
   }
);
const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PictureForm);
