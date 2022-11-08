class PriceCreater < ApplicationService
    attr_reader :vice

    def initialize(vice)
        @vice = vice
    end

    def call

        price = Stripe::Price.create(
            {
                nickname: vice.name,
                unit_amount: vice.amount * 100,
                currency: 'usd',
                recurring: {interval: 'month'},
                product: vice.stripe_product_id,
            },
        )


    end
end