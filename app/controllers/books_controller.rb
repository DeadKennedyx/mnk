class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    if params[:page]
      @books = Book.order(created_at: :desc).page(params[:page]).per_page 5
      render json: {books: @books, include: 'categories', meta: { records: Book.count, currentPage: @books.current_page }}
    else
      @books = Book.all
      render json: {books: @books, meta: { records: Book.count }}
    end
  end

  def show
    render json: @book
  end

  def create
    @book = Book.new(book_params)
    @book.categories = Category.where(id: params[:book][:category_ids])

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
  end

  private
    def set_book
      @book = Book.find(params[:id])
    end

    def book_params
      params.require(:book).permit(:name, :author, :published_date, category_ids: [])
    end
end
