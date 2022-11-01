class SubscriptionsController < ApplicationController
  # before_action :authenticate_user!
  
  def create
    # Find user in database
    user = User.find_by(email: params[:email])
    user_name = "#{user.first_name} #{user.last_name}"
    vice_price_ids = params[:prices]

    # Only make a customer If they set up a subscription
    customer = CustomerCreater.call(user_name, user.email)
    user.update(stripe_customer_id: customer.id)

    subscription = SubCreater.call(customer.id, vice_price_ids)
    vice_price_ids.each do | price_id |
      vice = Vice.find_by(stripe_price_id: price_id)
      Subscription.create(user_id: user.id, vice_id: vice.id)
    end
  end

  def show
    subscription = Subscription.find(params[:id])
  end

  private

  def subscription_params
    params.permit(:id, :email, :status, :prices, :payment_method)
  end
end
