class CustomerCreater < ApplicationService
    attr_reader :user_name, :user_email
    
    def initialize(user_name, user_email)
        @user_name = user_name
        @user_email = user_email
    end

    def call
        customer = Stripe::Customer.create(
            payment_method: nil,
            name: user_name,
            email: user_email,
            invoice_settings: {
            default_payment_method: nil,
            }
        )     
    end
end