require 'stripe'
ENV["STRIPE_SECRET"]

class StripeController < ApplicationController

    Stripe.api_key = "sk_test_5jh2avArQnW4c1z9BOCwxNUu00VuZoIYRw"

  # Creates a Stripe custumer obj / Hash
  def create_customer
    customer = Stripe::Customer.create(
    #   payment_method: intent.payment_method,
      email: params[:email],
      name: params[:name],
      invoice_settings: {
        # default_payment_method: intent.payment_method,
      }
  )
  end
  
  #  Creates a plan in Stripe
  def create_plan
    plan = Stripe::Plan.create({
        nickname: params[:vice_name],
        amount: 500, # 3 digits == $X.XX, This also must be a fixed amount. Can NOT pass a params for this value.
        currency: 'usd',
        interval: 'month',
        product: 'prod_H3qIm7DlE17qt9', # Can be found in Stripe daskboard - there is only one product
        metadata: {
            "v_description": params[:metadata][:v_description],
        }
    })
end


# Creates Stripe subscription id 
def create_sub (stripe_customer, plan_id)
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

  def stripe_params
    params.permit(:name, :email, :stripe_customer, :plan_id, :vice_name, :vice_amount, :v_description, :metadata)
  end

end