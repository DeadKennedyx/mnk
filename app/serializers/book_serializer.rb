class BookSerializer < ActiveModel::Serializer
  belongs_to :user, optional: true
  has_many :categories, include: true
  attributes :id, :name, :author
end
