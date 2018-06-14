# == Schema Information
#
# Table name: notifications
#
#  id           :bigint(8)        not null, primary key
#  user_id      :integer          not null
#  initiator_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  viewed       :boolean
#

require 'test_helper'

class NotificationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
