import * as APIFollows from '../util/follow_util';


export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';

export const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow
});

export const fetchFollows = () => dispatch => (
  APIFollows.fetchFollows().then(follows => dispatch(receiveFollows(follows)))
);

export const createFollow = (follow) => dispatch => (
  APIFollows.createFollow(follow).then(follow => {
    return dispatch(receiveFollow(follow));
  })
);

export const deleteFollow = (id) => dispatch => (
  APIFollows.deleteFollow(id).then(follow => dispatch(removeFollow(follow)))
);
