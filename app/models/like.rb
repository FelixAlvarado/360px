# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  liker_id   :integer          not null
#  picture_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

    validates :liker_id, :picture_id, presence: true
    validates_uniqueness_of :liker_id, :scope => [:picture_id]
    validates_uniqueness_of :picture, :scope => [:liker_id]
  

  
    # belongs_to :picture,
    # primary_key: :id,
    # foreign_key: :picture_id,
    # class_name: 'Picture'
  
  end
