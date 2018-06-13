@pictures.each do |picture|
  json.set! picture.id do
  json.extract! picture, :id, :title, :image_url, :uploader_id
  end
end
