class UpdateUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :new_notification, :boolean
  end
end
