class SubscriptionsController < ApplicationController

  def show
    subscription = Subscription.find(params[:id])
  end

  private

  def subscription_params
    params.permit(:id, :user_id, :vice_id, :status, :quantity)
  end
end
