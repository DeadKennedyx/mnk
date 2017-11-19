class Book < ApplicationRecord
  belongs_to :user, optional: true
  has_many :book_categories
  has_many :categories, through: :book_categories

  validates_format_of :name, :author, with: /\A([^0-9]*)\z/
  validates :name, :author, presence: true
  validate :has_categories

  before_save :set_availability

  def set_availability
    if self.user
      self.available = false
    else
      self.available = true
    end
  end

  def has_categories
    unless categories.size > 0
      errors.add(:base, "It should have at least one category")
    end
  end
end
