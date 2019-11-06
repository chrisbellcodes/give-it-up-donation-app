class UsersController < ApplicationController

  def create
    user = User.create(user_params)
    if user.valid?
      # Encoding user id to encrypt using JWT (check ApplicationController)
      render json: { token: encode_token(user) }
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def profile
    def decoded_token
      JWT.decode(token, 'loveArtsEd', true, { algorithm: 'HS256' })
    end

    def current_user
      User.find(decoded_token[0]["user_id"]) if decoded_token
    end
    render json: current_user
  end

  private

  def user_params
    params.permit(:id, :first_name, :last_name, :email, :password)
  end
end
