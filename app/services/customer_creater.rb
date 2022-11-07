class CustomerCreater < ApplicationService
    attr_reader :user_name, :user_email, :payment_method
    
    def initialize(user_name, user_email)
        @user_name = user_name
        @user_email = user_email
    end

    def call
        customer = Stripe::Customer.create(
            name: user_name,
            email: user_email,
        )     
    end
end