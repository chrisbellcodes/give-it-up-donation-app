module Api::V1
  class UsersController < ApplicationController
    before_action :authenticate_user!

    def create
      user = User.create(user_params)

      if user.valid? 
        render json: user
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def profile
      render json: current_user
    end

    private

    def user_params
      params.permit(:id, :first_name, :last_name, :email, :password)
    end 

  end
end
