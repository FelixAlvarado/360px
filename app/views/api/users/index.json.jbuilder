@users.each do |user|
  json.set! user.id do
  json.extract! user, :username, :cover_url, :profile_url, :description
  end
end
