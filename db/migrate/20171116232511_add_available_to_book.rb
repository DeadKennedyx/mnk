class AddAvailableToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :available, :boolean, default: true
  end
end
