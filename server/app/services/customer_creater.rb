class CustomerCreater < ApplicationService
    attr_reader :user_name, :user_email, :payment_method
    
    def initialize(user_name, user_email, payment_method)
        @user_name = user_name
        @user_email = user_email
        @payment_method = payment_method
    end

    def call
        customer = Stripe::Customer.create(
            payment_method: payment_method,
            name: user_name,
            email: user_email,
            invoice_settings: {
                default_payment_method: payment_method,
            }
        )     
    end
end