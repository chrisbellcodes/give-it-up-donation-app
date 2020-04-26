class UsersController < ApplicationController

  def create
    user = User.create(user_params)

    if user.valid? 
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def profile

  end

  private

  def user_params
    params.permit(:id, :first_name, :last_name, :email, :password)
  end 

end
