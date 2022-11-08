class Api::SubscriptionsController < ApplicationController
  
  def create

    # Find user in database
    user = User.find_by(stripe_customer_id: params[:stripe_customer_id])
    
    user_name = "#{user.first_name} #{user.last_name}"
    
    vice_price_ids = params[:prices].map {|priceId| {price: priceId} }
    
    subscription = SubCreater.call(user.stripe_customer_id, vice_price_ids)
    # [TODO]: store user subID in an array of subIds
    
    if subscription
      # vice_price_ids.each do | price_id |
      #   vice = Vice.find_by(stripe_price_id: price_id[:price])
      #   Subscription.create(user_id: user.id, vice_id: vice.id, subscription.id)
      # end
      render json: { subscriptionId: subscription.id, clientSecret: subscription.latest_invoice.payment_intent.client_secret }
    else
      render json: { errors: subscription.errors.full_messages }, status: :unprocessable_entity
    end

  end

  def show
    subscription = Subscription.find(params[:id])
  end

  def cancel
    deleted_subscription = SubCancel.call()

    render json: deleted_subscription
  end


  private

  def subscription_params
    params.permit(
      :id,
      :stripe_customer_id,
      :status, 
      :prices [], 
      :payment_method,
      :stripe_subscription_id
    )
  end
end
