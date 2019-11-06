class VicesController < ApplicationController

  def index
    vices = Vice.all
    render json: vices
  end

  def show
    vice = Vice.find(params[:id])
    render json: vice
  end

  def create
    vice = Vice.new(vice_params)
    if vice.save
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
