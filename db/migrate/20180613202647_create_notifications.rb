class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.integer :initiator_id, null: false

      t.timestamps
    end
    add_index :notifications, :user_id
    add_index :notifications, :initiator_id
  end
end
