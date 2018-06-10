class Api::FeedsController < ApplicationController

def home
  @pictures = current_user.get_home_feed
  render :home
end

end
