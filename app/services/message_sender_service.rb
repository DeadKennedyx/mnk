class MessageSenderService
  def initialize(book)
    @book = book
  end

  def perform
    BookMailer.available_book(@book).deliver_later
  end
end
