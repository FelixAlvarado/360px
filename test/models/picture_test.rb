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

require 'test_helper'

class PictureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
