class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :stripe_sub_id, :vice_id, :status
  belongs_to :user
  belongs_to :vice
end

