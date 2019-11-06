class Vice < ApplicationRecord
  belongs_to :category
  has_many :subscriptions
  has_many :users, through: :subscriptions

  validates :name, uniqueness: true
end
