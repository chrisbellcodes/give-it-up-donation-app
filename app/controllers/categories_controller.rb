class CategoriesController < ApplicationController

  def index
    categories = Category.all
    render json: categories
  end

  def show
    category = Category.find(params[:id])
  end

  private

  def category_params
    params.permit(:id, :name)
  end

end
