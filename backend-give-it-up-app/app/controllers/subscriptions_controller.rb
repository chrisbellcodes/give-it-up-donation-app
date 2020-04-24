class SubscriptionsController < ApplicationController

  def create
    user = User.find(params[:user_id])
    user_name = "#{user.first_name} #{user.last_name}"

    customer = CustomerCreater.call(user_name, user.email, params[:payment_method])
    user.update(stripe_customer_id: customer.id)
    SubCreater.call(customer.id, params[:plans])
  end

  def show
    subscription = Subscription.find(params[:id])
  end

  private

  def subscription_params
    params.permit(:id, :user_id, :vice_id, :status, :plans, :payment_method)
  end
end
