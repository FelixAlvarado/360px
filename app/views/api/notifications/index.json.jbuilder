@notifications.each do |notification|
  json.set! notification.id do
    json.extract! notification, :id, :user_id, :initiator_id
  end
end
