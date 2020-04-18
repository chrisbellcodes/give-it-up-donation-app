require 'stripe'

class CustomerCreater < ApplicationService
    attr_reader :user_name, :user_email

    Stripe.api_key = "sk_test_5jh2avArQnW4c1z9BOCwxNUu00VuZoIYRw"
    
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