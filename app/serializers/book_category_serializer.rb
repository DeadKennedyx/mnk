class BookCategorySerializer < ActiveModel::Serializer
  belongs_to :book
  belongs_to :category
end
