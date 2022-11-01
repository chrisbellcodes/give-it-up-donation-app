class VicesController < ApplicationController

  def index
    vices = Vice.all
    # ProductIdAdder.call(vices)
    # [TODO]: Make sure to check if price exsists. If not get it from Stripe
    render json: vices
  end

  def show
    vice = Vice.find(params[:id])
    render json: vice
  end

  def create
    # Create a product on stripe first
      # if success, save to USER vices
      # if error, show error in console and send back error to client
    vice = Vice.new(vice_params)

    if vice.save
      product = ProductCreater.call(vice)
      vice.update(stripe_product_id: product.id)
      render json: vice
    else
      render json: {message: "Ya messed up."}
    end
  end



  private

  def vice_params
    params.permit(:id, :name, :amount, :description, :category_id)
  end
end
