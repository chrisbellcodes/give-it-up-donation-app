require 'stripe'
Stripe.api_key = "sk_test_5jh2avArQnW4c1z9BOCwxNUu00VuZoIYRw"
# def delete_plans_from_stripe #currently only deletes 10 at a time
#     plans = Stripe::Plan.list()
#     plans.each do |plan|
#         Stripe::Plan.delete(plan.id)
#     end
# end

# delete_plans_from_stripe()

# Seed Stripe with Plans
# def seed_stripe_w_plans
#     vices = Vice.all
#     vices.each do |vice|
#         price = vice.amount
#         price*=100
#         plan = Stripe::Plan
#         plan.create({
#             nickname: vice.name,
#             amount: price, # 3 digits == $X.XX, This also must be a fixed amount. Can NOT pass a params for this value.
#             currency: 'usd',
#             interval: 'month',
#             product: 'prod_H3qIm7DlE17qt9', # Can be found in Stripe daskboard - there is only one product
#             metadata: {
#                 "v_description": vice.description,
#                 "v_category_id": vice.category_id
#             }
#         })
#     end
# end

# seed_stripe_w_plans()