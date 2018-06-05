class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null:false
      t.string :password_digest, null:false
      t.string :session_token, null:false
      t.string :profile_url, null:false
      t.string :cover_url, null:false
      t.string :description

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
