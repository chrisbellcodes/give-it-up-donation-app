class User < ApplicationRecord
  has_secure_password
  
  has_many :subscriptions
  has_many :vices, through: :subscriptions

  validates :email, uniqueness: true
end
