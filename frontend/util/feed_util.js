export const homeFeed = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/feed'
  });
};

export const discoverFeed = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/fresh'
  });
};
