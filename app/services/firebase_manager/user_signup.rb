class UserSignup < ApplicationService

    attr_reader :email, :password
    
    def initialize(email, password)
        @email = email
        @password = password
    end

    def call
        
    end
    
end