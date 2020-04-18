
class PlanCreater < ApplicationService
    def initialize()
        
    end

    def call
        price = params[:v_amount].to_i
        price*=100
        plan = Stripe::Plan.create({
            nickname: params[:vice_name],
            amount: price, # 3 digits == $X.XX, This also must be a fixed amount. Can NOT pass a params for this value.
            currency: 'usd',
            interval: 'month',
            product: 'prod_H3qIm7DlE17qt9', # Can be found in Stripe daskboard - there is only one product
            metadata: {
                "v_description": params[:metadata][:v_description],
            }
        })
    end
end