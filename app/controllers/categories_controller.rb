class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  def index
    if params[:page]
      @categories = Category.order(created_at: :desc).page(params[:page]).per_page 5
      render json: {categories: @categories, meta: { records: Category.count, currentPage: @categories.current_page, totalPages: @categories.total_pages }}
    else
      @categories = Category.all
      render json: {categories: @categories, meta: { records: Category.count }}
    end
  end

  def show
    render json: @category
  end

  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category, status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def update
    if @category.update_attributes(category_params.reject{|k,v| v.blank?})
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @category.destroy
  end

  private
    def set_category
      @category = Category.find(params[:id])
    end

    def category_params
      params.require(:category).permit(:name, :description)
    end
end
