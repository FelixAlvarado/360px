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

### Following 
I really enjoyed implementing this in my app.

# Things to Note
