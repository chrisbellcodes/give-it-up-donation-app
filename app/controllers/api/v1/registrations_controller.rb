module Api::V1
  class RegistrationsController < Devise::SessionsController
    respond_to :json

    def create
      user = User.create(sign_up_params)
      render json: user
    end

    private

    def sign_up_params
      params.permit(:id, :first_name, :last_name, :email, :password, :user)
    end
  end
end