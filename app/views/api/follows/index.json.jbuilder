@followers.each do |follow|
  json.set! follow.id do
    json.extract! follow, :id, :leader_id, :follower_id
  end
end
