class SubCreater < ApplicationService
    attr_reader :stripe_customer_id, :plan_array

    def initialize(stripe_customer_id, plan_array)
        @stripe_customer_id = stripe_customer_id
        @plan_array = plan_array
    end

    # Creates Stripe subscription id 
    def call
        list = plan_array.map do |plan_id|
            {
                plan: plan_id
            }
        end
        subscription = Stripe::Subscription.create(
        customer: stripe_customer_id,
        items: list,
        expand: ['latest_invoice.payment_intent'],
        )
    end

end