# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  leader_id   :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
