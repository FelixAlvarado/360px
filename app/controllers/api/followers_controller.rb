class Api::FollowersController < ApplicationController
  def create
    @follow = Follow.new(follower_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    user = User.find(current_user.id)
    followers = user.followers
    followings = user.followings
    @follows = followers.merge(followings)
    render :index
  end

  def delete
    @follow = Follow.find(params[:id])
    @follow.destroy
    render :show
  end

  private

  def follower_params
    params.require(:follows).permit(:leader_id,:follower_id)
  end
end
