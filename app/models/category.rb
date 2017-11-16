class Category < ApplicationRecord
  has_many :book_categories
  has_many :books, through: :book_categories

  validates_format_of :name, with: /\A[a-z]+\z/i
end
