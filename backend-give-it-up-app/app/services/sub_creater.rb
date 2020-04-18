class SubCreater < ApplicationService
    attr_reader :stripe_customer, :plan_id

    def initialize(stripe_customer, plan_id)
        @stripe_customer = stripe_customer
        @plan_id = plan_id
    end

    # Creates Stripe subscription id 
    def call
        subscription = Stripe::Subscription.create(
        customer: stripe_customer.id,
        items: [
            {
                plan: plan_id,
            },
        ],
        expand: ['latest_invoice.payment_intent'],
        )
    end


end