class PriceIdAdder < ApplicationService
    attr_reader :vices

    def initialize(vices)
        @vices = vices
    end

    def call
        produsts = Stripe::Product.list({limit: 100})
        vices.each do |vice|
            if (vice.stripe_plan_id == nil)
                plan = plans["data"].find do |p| 
                    p.nickname == vice.name 
                end
                if plan != nil
                    vice.update(stripe_plan_id: plan.id)
                    vice.save
                end
            end
        end

      end
end

