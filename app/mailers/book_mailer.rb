class BookMailer < ApplicationMailer
  default :from => "test@test.com"

  def available_book(book)
    @book = book
    user = User.first
    mail(to: user.email, subject: "Book Available!", body: "The book #{book.name} is available!" )
  end
end
