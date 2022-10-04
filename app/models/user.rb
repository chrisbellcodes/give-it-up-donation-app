class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
  has_many :subscriptions
  has_many :vices, through: :subscriptions

  validates :email, uniqueness: true
end
