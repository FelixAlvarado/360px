

export const pictureList = (pictures) => {
  return Object.values(pictures);
};

export const findFollow = (follows, currentUserId, profileUserId) => {
  const followArr = Object.values(follows);
  for (var i = 0; i < followArr.length; i++) {
    const follow = followArr[i];
    if (follow.follower_id === currentUserId && follow.leader_id === profileUserId) {
      return follow;
    }
  }
  return null;
};
