class VicesController < ApplicationController

  def index
    vices = Vice.all
    PlanIdAdder.call(vices)
    render json: vices
  end

  def show
    vice = Vice.find(params[:id])
    render json: vice
  end

  def create
    vice = Vice.new(vice_params)
    # byebug
    if vice.save
      PlanCreater.call(vice)
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
