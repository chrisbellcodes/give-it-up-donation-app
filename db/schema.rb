# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_30_232733) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "subscriptions", force: :cascade do |t|
    t.bigint "user_id"
    t.string "status"
    t.bigint "vice_id"
    t.integer "quantity"
    t.string "stripe_sub_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["user_id"], name: "index_subscriptions_on_user_id"
    t.index ["vice_id"], name: "index_subscriptions_on_vice_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "stripe_customer_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "firebase_id"
  end

  create_table "vices", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "amount"
    t.string "stripe_product_id"
    t.string "stripe_price_id"
    t.bigint "category_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "popular"
    t.index ["category_id"], name: "index_vices_on_category_id"
  end

  add_foreign_key "subscriptions", "users"
  add_foreign_key "subscriptions", "vices"
  add_foreign_key "vices", "categories"
end
