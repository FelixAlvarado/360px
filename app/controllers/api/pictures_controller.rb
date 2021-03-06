class Api::PicturesController < ApplicationController

  def create
    @picture = Picture.new(picture_params)
    @picture.uploader_id = params[:user_id]
      if @picture.save
        render :show
      else
        render json: @picture.errors.full_messages, status: 422
      end
  end

  def update
    @picture = Picture.find_by(id: params[:id].to_i)
      if @picture.update(picture_params)
        render :show
      else
        render json: @picture.errors.full_messages, status: 422
      end
  end

  def destroy
    @picture = Picture.find_by(id: params[:id])
    @picture.destroy
    render :show
  end

  def index
    # the params thing may be wrong. going to have to check this out when I test
    puts params
    user = User.find_by(id: params[:user_id])
    @pictures = user.pictures
  end

  def show
    @picture = Picture.find_by(id: params[:id])
    render :show
  end

  private

  def picture_params
    params.require(:picture).permit(:title, :image_url)
  end
end
