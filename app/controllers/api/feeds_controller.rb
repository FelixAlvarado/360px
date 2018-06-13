class Api::FeedsController < ApplicationController

  def home
    @pictures = current_user.get_home_feed
    render :home
  end

  def fresh
    @pictures = current_user.get_fresh_feed
    render :fresh
  end
end
