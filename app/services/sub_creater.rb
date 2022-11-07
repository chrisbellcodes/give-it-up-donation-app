class SubCreater < ApplicationService
    attr_reader :stripe_customer_id, :price_array

    def initialize(stripe_customer_id, price_array)
        @stripe_customer_id = stripe_customer_id
        @price_array = price_array
    end

    # Creates Stripe subscription id 
    def call
        # Create the subscription. Note we're expanding the Subscription's
        # latest invoice and that invoice's payment_intent
        # so we can pass it to the front end to confirm the payment

        subscription = Stripe::Subscription.create(
        customer: @stripe_customer_id,
        items: @price_array,
        expand: ['latest_invoice.payment_intent'],
        payment_behavior: 'default_incomplete',
        payment_settings: {save_default_payment_method: 'on_subscription'},
        expand: ['latest_invoice.payment_intent']
        )
    end

end