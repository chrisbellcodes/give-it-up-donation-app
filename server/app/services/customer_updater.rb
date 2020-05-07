class CustomerUpdater < ApplicationService
    attr_reader :payment_method_id, :custumer_id

    def initialize(payment_method_id, custumer_id)
        @payment_method_id = payment_method_id
        @custumer_id = custumer_id    
    end

    def call
        Stripe::Customer.update(
            custumer_id,
                {
                    source: payment_method_id,
                    invoice_settings: {
                        default_payment_method: payment_method_id,
                    }
                }
        )
    end
end