class Book < ApplicationRecord
  has_many :user_books
  has_many :users, through: :user_books
  has_many :book_categories
  has_many :categories, through: :book_categories

  validates_format_of :name, :author, with: /\A[a-z]+\z/i
end
