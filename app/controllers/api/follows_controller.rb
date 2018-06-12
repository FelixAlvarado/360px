class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    # user = User.find(current_user.id)
    @follows = Follow.all
    render :index
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:leader_id,:follower_id)
  end
end
