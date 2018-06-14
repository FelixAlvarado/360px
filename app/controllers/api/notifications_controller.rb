class Api::NotificationsController < ApplicationController
  def create
    @notification = Notification.new(notification_params)
    @notification.viewed = false
    if @notification.save!
      render :show
    else
      render json: @notification.errors.full_messages, status: 422
    end
  end

  def update
    @notification = Notification.find_by(id: params[:id].to_i)
      if @notification.update(notification_params)
        render :show
      else
        render json: @notification.errors.full_messages, status: 422
      end
  end

  def index
    @notifications = current_user.get_notifications
    render :index
  end

  def destroy
    @notification = Notification.find(params[:id])
    @notification.destroy
    render :show
  end

  private

  def notification_params
    params.require(:notification).permit(:initiator_id,:user_id, :viewed)
  end
end
