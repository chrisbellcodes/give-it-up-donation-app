require 'stripe'

class ApplicationService

    Stripe.api_key = Rails.application.credentials.dig(:stripe, :STRIPE_SECRET)

    def self.call(*args, &block)
        new(*args, &block).call
    end
end
