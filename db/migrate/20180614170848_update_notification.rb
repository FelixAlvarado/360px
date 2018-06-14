class UpdateNotification < ActiveRecord::Migration[5.1]
  def change
    add_column :notifications, :viewed, :boolean
  end
end
