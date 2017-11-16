class User < ApplicationRecord
  has_many :user_books
  has_many :books, through: :user_books

  validates :email, email_format: { message: "doesn't look like an email address" }
  validates_format_of :name, with: /\A[a-z]+\z/i
end
