require 'stripe'

class ApplicationService

    Stripe.api_key = ENV["STRIPE_SECRET"]

    def self.call(*args, &block)
        new(*args, &block).call
    end
end
