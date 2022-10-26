class UsersController < ApplicationController
  # before_action :authenticate_user!

  def create


    user = get_set_user()

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
    params.require(:user).permit(:email, :uid, :displayName, stsTokenManager: {})
  end 

  def get_set_user
      begin
          token = user_params["stsTokenManager"]["accessToken"]
          first_name = user_params["displayName"].split(' ').first
          last_name = user_params["displayName"].split(' ').last
          
          # If no token from client, stop method 
          if token.nil?
            @user = nil
            return
          end
          # if token from client:
          firebase_id = verify_user(token)[0]["user_id"]
          if User.where(:firebase_id => firebase_id).exists?
            @user = User.where(:firebase_id => firebase_id).first
          else
            @user = User.new(:firebase_id => firebase_id, :email => user_params["email"], :first_name => first_name, :last_name => last_name)
            @user.save
            @user
          end
      rescue
          @user = nil
      end
  end

  def verify_user(token)
    certificate_url = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com"
    myresponse = RestClient.get(certificate_url).body
    certificates  = JSON.parse myresponse.gsub('=>', ':')
    myjson =""
    certificates.each do|key , value|
      begin
        x509 = OpenSSL::X509::Certificate.new(value)
        iss = 'https://securetoken.google.com/give-it-up-app'
        aud = 'give-it-up-app' # change this 
        myjson = JWT.decode(token, x509.public_key, true, 
        {               
          algorithm: "RS256", verify_iat: true ,
          iss: iss , verify_iss: true ,
          aud: aud , verify_aud: true
        })

        return myjson

      rescue
      end
    end

    return nil     

  end



end
