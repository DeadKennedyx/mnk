class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    if params[:page]
      @users = User.order(created_at: :desc).page(params[:page]).per_page 5
      render json: {users: @users, meta: { records: User.count, currentPage: @users.current_page, totalPages: @users.total_pages }}
    else
      @users = User.limit(5)
      render json: {users: @users, meta: { records: User.count }}
    end
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update_attributes(user_params.reject{|k,v| v.blank?})
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email)
    end
end
