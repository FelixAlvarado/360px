class ChangeUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profile_url
    remove_column :users, :cover_url
    add_column :users, :profile_url, :string
    add_column :users, :cover_url, :string
  end
end
