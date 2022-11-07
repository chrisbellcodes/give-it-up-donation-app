class SubCancel < ApplicationService
    attr_reader :stripe_subscription_id

    def initialize(stripe_subscription_id)
        @stripe_subscription_id = stripe_subscription_id
    end

    def call
        deleted_subscription = Stripe::Subscription.delete(params['subscriptionId'])
    end

end