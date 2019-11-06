class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  belongs_to :user
  belongs_to :vice
end
