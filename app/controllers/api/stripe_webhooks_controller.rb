class Api::StripeWebhooksController < ApplicationController
  def create
    webhook_secret = Rails.application.credentials.dig(:stripe, :WEBHOOK_SECRET)
    payload = request.body.read

    if !webhook_secret.empty?
      # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
      sig_header = request.env['HTTP_STRIPE_SIGNATURE']
      event = nil

      begin
        event = Stripe::Webhook.construct_event(
          payload, sig_header, webhook_secret
        )
      rescue JSON::ParserError => e
        # Invalid payload
        status 400
        return
      rescue Stripe::SignatureVerificationError => e
        # Invalid signature
        puts '⚠️  Webhook signature verification failed.'
        status 400
        return
      end
    else
      data = JSON.parse(payload, symbolize_names: true)
      event = Stripe::Event.construct_from(data)
    end
    # Get the type of webhook event sent
    event_type = event['type']
    data = event['data']
    data_object = data['object']

    def update_subscription_status(stripe_data)
      begin
        payment_intent = stripe_data
        user = User.find_by(stripe_customer_id: payment_intent.customer)
        subs = Subscription.where(stripe_sub_id: payment_intent.id ).each {|sub| sub.update!(status: payment_intent["status"])}
      rescue => exception
        puts exception
      end
    end

    case event_type
    when 'payment_intent.succeeded'
      update_subscription_status(data_object)
    when 'invoice.paid'
      # byebug
      update_subscription_status(data_object)
      # Continue to provision the subscription as payments continue to be made.
      # Store the status in your database and check when a user accesses your service.
      # This approach helps you avoid hitting rate limits.
      
    when 'invoice.payment_failed'
      update_subscription_status(data_object)
      # The payment failed or the customer does not have a valid payment method.
      # The subscription becomes past_due. Notify your customer and send them to the
      # customer portal to update their payment information.
    when 'customer.subscription.deleted'
      update_subscription_status(data_object)
    when 'customer.subscription.updated'
      update_subscription_status(data_object)
    else
      puts "Unhandled event type: \#{event.type}"
    end
  end


end
