class ViceSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :description, :stripe_plan_id, :popular
  belongs_to :category
  # has_many :subscriptions
  # has_many :users, through: :subscriptions
end
