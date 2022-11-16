class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email, :stripe_customer_id, :stripe_subscriptions
  has_many :subscriptions
  has_many :vices, through: :subscriptions


  def stripe_subscriptions
    stripe_subs = []
    
    object.subscriptions.each_with_object(stripe_subs) { |sub|
      if !stripe_subs.any? {|h| h.has_value?(sub.stripe_sub_id)}
        stripe_subs.push({ 
          "stripe_id" => sub.stripe_sub_id,
          "status" => sub.status,
          "vices" => Subscription.where(stripe_sub_id: sub.stripe_sub_id).map {|sub| Vice.find(sub.vice_id)}
        })
      end
    }

    stripe_subs
  end


end
