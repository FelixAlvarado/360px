export const homeFeed = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/feed'
  });
};
