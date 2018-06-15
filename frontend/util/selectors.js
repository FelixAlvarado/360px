

export const pictureList = (pictures) => {
  return Object.values(pictures).reverse();
};

export const pictureListFeed = (pictures) => {
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

export const parseUrl = (url) => {
const newUrl = 'https://res.cloudinary.com/dbm56y2y/image/upload/c_scale,h_500/';
return newUrl.concat(url.slice(48));
};

export const parseUrlBig = (url) => {
const newUrl = 'https://res.cloudinary.com/dbm56y2y/image/upload/c_scale,w_1000/';
return newUrl.concat(url.slice(48));
};

export const newNotifications = (notifications) => {
  const array = Object.values(notifications);
  if (array.length === 0) return [];
  let userNames = [];
  let newArray = [];
    array.forEach((n) => {
      if (n.viewed === false && !userNames.includes(n.username)){
      userNames.push(n.username);
      newArray.push(n);
    }
  });
  console.log(newArray);
  return newArray.reverse();
};

export const notifyArray = (notifications) => {
  return Object.values(notifications).reverse();

};
