class ProductCreator < ApplicationService
    attr_reader :vice

    def initialize(vice)
        @vice = vice
    end

    def call

        product = Stripe::Product.create({
            name: vice.name,
            description: vice.description,
            default_price: null,
        })
        
    end
end