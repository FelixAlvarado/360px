class UpdateUsers2 < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :new_notification
  end
end
