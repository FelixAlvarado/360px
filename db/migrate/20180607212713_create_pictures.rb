class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :title
      t.string :image_url, null: false
      t.integer :uploader_id, null: false
      t.timestamps
    end
    add_index :pictures, :uploader_id
  end
end
