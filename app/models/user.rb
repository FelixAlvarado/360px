# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  description     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_url     :string
#  cover_url       :string
#

class User < ApplicationRecord
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  before_validation :ensure_session_token

  has_many :pictures,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: 'Picture'

  has_many :followers,
  primary_key: :id,
  foreign_key: :leader_id,
  class_name: 'Follow'

  has_many :followings,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: 'Follow'

  def get_home_feed
    followings = self.followings
    pictures = []
    followings.each do |follow|
      user = User.find(follow.leader_id)
      pictures += user.pictures
    end
    if pictures.length < 25
      other_pictures = Picture.all.sort {|a,b| b.created_at <=> a.created_at}
      count = 0
      other_pictures.each do |picture|
        unless count == 3 || picture.uploader_id === self.id || pictures.include?(picture)
          pictures.push(picture)
          count += 1
        end

      end
    end
    pictures.sort {|a,b| b.created_at <=> a.created_at}.take(25)
  end

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
