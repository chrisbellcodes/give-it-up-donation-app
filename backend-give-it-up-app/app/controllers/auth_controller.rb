class AuthController < ApplicationController

  def create
    user = User.find_by(first_name: params[:first_name])
    is_authenticated = user.authenticate(params[:password])
    if is_authenticated
      render json: { token: encode_token(user) }

    else
      render json: { errors: ["Wrong login or password"]}, status: 422
    end
  end

end
