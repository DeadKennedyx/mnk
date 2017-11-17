class Book < ApplicationRecord
  belongs_to :user, optional: true
  has_many :book_categories
  has_many :categories, through: :book_categories

  validates_format_of :name, :author, with: /\A([^0-9]*)\z/
end
