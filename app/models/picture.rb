# == Schema Information
#
# Table name: pictures
#
#  id          :bigint(8)        not null, primary key
#  title       :string
#  image_url   :string           not null
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Picture < ApplicationRecord

  validates :image_url, :uploader_id, presence: true

   belongs_to :user,
   primary_key: :id,
   foreign_key: :uploader_id,
   class_name: 'User'
end
