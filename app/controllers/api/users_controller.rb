class Api::UsersController < ApplicationController
  before_action :get_set_user

  def create

    if @user.stripe_customer_id.nil?
      customer = CustomerCreater.call(params[:user][:displayName], @user.email)
      @user.update(stripe_customer_id: customer.id)
    end
    if @user.valid? 
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def profile
    render json: @user
  end

  

end
