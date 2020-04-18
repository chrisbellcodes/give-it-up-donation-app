require 'stripe'

class ApplicationService

    Stripe.api_key = "sk_test_5jh2avArQnW4c1z9BOCwxNUu00VuZoIYRw"

    def self.call(*args, &block)
        new(*args, &block).call
    end
end
