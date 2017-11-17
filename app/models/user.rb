class User < ApplicationRecord
  has_many :books

  validates :email, email_format: { message: "doesn't look like an email address" }
  validates_format_of :name, with: /\A([^0-9]*)\z/
end
