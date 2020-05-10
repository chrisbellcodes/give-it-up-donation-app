module Api::V1
  class SubscriptionsController < ApplicationController
    # before_action :authenticate_user!
    
    def create
      user = User.find_by(email: params[:email])
      user_name = "#{user.first_name} #{user.last_name}"
      vice_plan_ids = params[:plans]
      customer = CustomerCreater.call(user_name, user.email, params[:payment_method])
      user.update(stripe_customer_id: customer.id)
      subscription = SubCreater.call(customer.id, vice_plan_ids)
      vice_plan_ids.each do | plan_id |
        vice = Vice.find_by(stripe_plan_id: plan_id)
        Subscription.create(user_id: user.id, vice_id: vice.id)
      end
    end

    def show
      subscription = Subscription.find(params[:id])
    end

    private

    def subscription_params
      params.permit(:id, :email, :status, :plans, :payment_method)
    end
  end
end
