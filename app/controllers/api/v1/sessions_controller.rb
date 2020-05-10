module Api::V1
  class SessionsController < Devise::SessionsController
    before_action :authenticate_user!
    respond_to :json

    def create
      user = User.where(email: params[:email])
      respond_with(user)
    end

    private
      def respond_with(resource, _opts = {})
        render json: resource
      end

      def respond_to_on_destroy
        head :ok
      end
  end
end