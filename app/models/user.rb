class User < ApplicationRecord
  has_many :books

  validates :email, email_format: { message: "doesn't look like an email address" }
  validates_format_of :name, with: /\A([^0-9]*)\z/
  validates :name, :email, presence: true

  def has_book?(book)
    books.where("books.name = ?", book)
  end
end
