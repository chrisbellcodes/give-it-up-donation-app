class PlanCreater < ApplicationService
    attr_reader :vice

    def initialize(vice)
        @vice = vice
    end

    def call
        price = vice.amount
        price*=100
        plan = Stripe::Plan.create({
            nickname: vice.name,
            amount: price, # 3 digits == $X.XX, This also must be a fixed amount. Can NOT pass a params for this value.
            currency: 'usd',
            interval: 'month',
            product: 'prod_H3qIm7DlE17qt9', # Can be found in Stripe daskboard - there is only one product
            metadata: {
                "v_description": vice.description,
            }
        })
    end
end