class ViceSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :description
  belongs_to :category
  # has_many :subscriptions
  # has_many :users, through: :subscriptions
end
