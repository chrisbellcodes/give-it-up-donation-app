class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email, :stripe_customer_id
  has_many :subscriptions
  has_many :vices, through: :subscriptions
end
