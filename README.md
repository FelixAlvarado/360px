# README

This site is a clone of 500px.com. While logged in, and one can view other people's photos on their feed, follow other users, and upload pictures of their own. Ruby on Rails was used for the back end, and React was used for the front end.

[Link to 360px](https://threesixtypixels.herokuapp.com/#/)

# Key Features 

### Home and Discover Feeds

* At first, when tackling how to fetch the correct pictures for both feeds, I was not sure how to differenctiate between the two. Up until that point, I was only taught about the standard routes. After researching this topic, I came across custom routes , which proved to be a viable solution. My routes for my two feeds are as follows: 

```ruby
    get '/feed', to: 'feeds#home', controller: 'feeds'
    get '/fresh', to: 'feeds#fresh', controller: 'feeds'
```
* In the feeds controller, I used a predefined User method on the current user in order to get the two feeds accordingly. Right now, my app fetches pictures based on who the user is following, as well as whatever pictures are most recent. I my logic also adds pictures from users the current user isn't following, so their feed won't be empty upon signing up for an account: 

```ruby
  def get_home_feed
    followings = self.followings
    pictures = []
    followings.each do |follow|
      user = User.find(follow.leader_id)
      pictures += user.pictures
    end
    if pictures.length < 30
      other_pictures = Picture.all.sort {|a,b| b.created_at <=> a.created_at}
      count = 0
      other_pictures.each do |picture|
        unless count == 3 || picture.uploader_id === self.id || pictures.include?(picture)
          pictures.push(picture)
          count += 1
        end

      end
    end
    pictures.sort {|a,b| b.created_at <=> a.created_at}.take(30)
  end
```
On the front end, html elements are rendered based on if the current user is following the user who posted the picture:

![](https://res.cloudinary.com/dbm56y2y/image/upload/v1529098063/suggested.png)

### Followings 
I really enjoyed implementing this in my website. It was fun planning out and and going through the steps these step. While the backend for implementing follows was faily simple, more logic was required in the front end.

* One of the key mechanices for rendering the follow button is knowing weather the current user is following the user whose profile they are on. The follow for both users is retreived in the following selector: 

```javascript
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
```

* In order for the follow button is stay updated, I determined that I would have to dispatch the proper action based on whether the current user is following the user who the button corrensponds to:

```javascript
  updateFollow(){
    const {deleteFollow, createFollow, follow, user, currentUser, createNotification} = this.props;
    if (follow){
      deleteFollow(follow.id);
    } else {
      createFollow({leader_id: user.id, follower_id: currentUser.id});
      createNotification({initiator_id: currentUser.id, user_id: user.id});
    }
  }
```
    A notification is also created so the new followee will receive a notification letting them know that they received a new follower.

# Things to Note

In the near future, I plan on coming back to this project and adding new features. These include: 

* Taggings for pictures
* A search feature for users and tags
* Likes and comments
* A notification page
