@users.each do |user|
  json.set! user.id do
  json.extract! user,:id, :username, :cover_url, :profile_url, :description
  end
end
