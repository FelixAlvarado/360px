class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
        if @user.username == 'Felix'
          Notification.create(user_id: @user.id, initiator_id: User.all[3].id, viewed: false)
          Follow.create(leader_id: @user.id,follower_id: User.all[3].id)
        end
      render 'api/users/show'
    else
      render json: ["Must have valid username and password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
        if @user.username == 'Felix'
          notify = Notification.find_by(initiator_id: User.all[3].id)
          notify.destroy
          follow = Follow.find_by(follower_id: User.all[3].id)
          follow.destroy
        end
      logout
      render 'api/users/show'
    else
      render json: ["Must be logged in to log out"], status: 404
    end
  end

end
