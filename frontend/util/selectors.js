

export const pictureList = (pictures) => {
  return Object.values(pictures).reverse();
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

export const getFollowers = (follows, id) => {
  const followArr = Object.values(follows);
  let followers = 0;
  for (var i = 0; i < followArr.length; i++) {
    if(followArr[i].leader_id === id){
      followers += 1;
    }
  }
  return followers;
};

export const getFollowings = (follows, id) => {
  const followArr = Object.values(follows);
  let following = 0;
  for (var i = 0; i < followArr.length; i++) {
    if(followArr[i].follower_id === id){
      following += 1;
    }
  }
  return following;
};
