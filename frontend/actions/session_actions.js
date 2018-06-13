export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER =  'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'CLEAR_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
import * as APIUtil from '../util/session_api_util';
import {fetchFollows} from './follow_actions';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS

  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const removeUser = (user) => {
  return {type: REMOVE_USER, user};
};

export const receiveUsers = (users) => {
  return {type: RECEIVE_USERS, users};
};

export const getUser = (user) => dispatch => {
  return APIUtil.fetchUser(user)
  .then((user) =>
    dispatch(receiveUser(user)));
};


export const login = (user) => dispatch => {
  return APIUtil.login(user)
  .then((currentUser) => {
    dispatch(fetchUsers());
    return dispatch(receiveCurrentUser(currentUser));},
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()));
};

export const signup = (user) => dispatch => (
   APIUtil.signup(user).then((currentUser) => {
         dispatch(fetchUsers());
     return dispatch(receiveCurrentUser(currentUser));},(errors) => dispatch(receiveErrors(errors.responseJSON))));

export const fetchUsers = () => dispatch => {
  return APIUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)));
};

export const updateUser = (user) => dispatch => (
   APIUtil.updateUser(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)),(errors) => dispatch(receiveErrors(errors.responseJSON))));

   // APIUtil.signup(user)
   // .then((currentUser) =>
   //   dispatch(receiveCurrentUser(currentUser)),
   //   (errors) => dispatch(receiveErrors(errors.responseJSON)))
