# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180729043814) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer "leader_id", null: false
    t.integer "follower_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id"], name: "index_follows_on_follower_id"
    t.index ["leader_id", "follower_id"], name: "index_follows_on_leader_id_and_follower_id", unique: true
    t.index ["leader_id"], name: "index_follows_on_leader_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.integer "picture_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liker_id", "picture_id"], name: "index_likes_on_liker_id_and_picture_id", unique: true
    t.index ["liker_id"], name: "index_likes_on_liker_id"
    t.index ["picture_id"], name: "index_likes_on_picture_id"
  end

  create_table "notifications", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "initiator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "viewed"
    t.index ["initiator_id"], name: "index_notifications_on_initiator_id"
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "pictures", force: :cascade do |t|
    t.string "title"
    t.string "image_url", null: false
    t.integer "uploader_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uploader_id"], name: "index_pictures_on_uploader_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_url"
    t.string "cover_url"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
