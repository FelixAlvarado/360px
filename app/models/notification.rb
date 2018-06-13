# == Schema Information
#
# Table name: notifications
#
#  id           :bigint(8)        not null, primary key
#  user_id      :integer          not null
#  initiator_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Notification < ApplicationRecord

  validates :initiator_id, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :initiator,
  primary_key: :id,
  foreign_key: :initiator_id,
  class_name: 'User'

end
