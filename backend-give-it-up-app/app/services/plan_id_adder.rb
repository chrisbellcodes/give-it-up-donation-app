require 'stripe'
require 'byebug'

class PlanIdAdder < ApplicationService
    attr_reader :vices

    Stripe.api_key = "sk_test_5jh2avArQnW4c1z9BOCwxNUu00VuZoIYRw"

    def initialize(vices)
        @vices = vices
    end

    def call
        plans = Stripe::Plan.list({limit: 100})
        vices.each do |vice|
            if (vice.stripe_plan_id == nil)
                plan = plans["data"].find do |p| 
                    p.nickname == vice.name 
                end
                vice.update(stripe_plan_id: plan.id)
                vice.save
            end
        end

        #   plans['data'].each do |plan| 
        #     vice = vices.find_by(name: plan.nickname)
        #     if !vice.stripe_plan_id
        #     end
        #   end
      end
end

