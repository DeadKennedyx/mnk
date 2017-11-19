class BookSerializer < ActiveModel::Serializer
  belongs_to :user, optional: true
  has_many :categories
  attributes :id, :name, :author
end
