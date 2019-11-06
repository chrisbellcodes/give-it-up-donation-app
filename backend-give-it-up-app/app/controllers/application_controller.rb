class ApplicationController < ActionController::API

  def encode_token(user)
    payload = { user_id: user.id }
    JWT.encode(payload, 'loveArtsEd', 'HS256')
  end

  def token
    request.headers["Authorization"]
  end

end
