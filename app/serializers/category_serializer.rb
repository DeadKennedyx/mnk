class CategorySerializer < ActiveModel::Serializer
  has_many :book_categories
  has_many :books, through: :book_categories
  attributes :id, :name, :description

end
