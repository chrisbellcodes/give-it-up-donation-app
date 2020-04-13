# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require 'stripe'
require 'csv'
require 'byebug'

Vice.destroy_all
Category.destroy_all
Subscription.destroy_all

# Imports vicedata for creating vices
vicedata = CSV.parse(File.read(Rails.root.join('lib', 'seeds', 'vicedata.csv')), headers: true, :encoding => 'ISO-8859-1')

# Test User
chris = User.create(first_name: "Chris", last_name: "Bell", password: "abc123", email: "cdangelobell@gmail.com")

# Seed Categories
smoking = Category.create(name: "Smoking")
fast_foods = Category.create(name: "Fast Foods")
bev_non = Category.create(name: "Beverages: Non-alcoholic")
memberships = Category.create(name: "Memberships")
gambling = Category.create(name: "Gambling")
sweets = Category.create(name: "Sweets")
bev_al = Category.create(name: "Beverages: Alcoholic")
misc = Category.create(name: "Misc.")


# Seed Vices
def seed_db_w_vices vicedata
    cats = Category.all
    cats.each do | cat |
        vices = vicedata.select { |data| cat.name == data["category" ]}
        vices.each do |data|
            Vice.create(
                name: data["name"],
                description: data["description"],
                amount: data["amount"].to_i,
                category_id: cat.id
            )
        end
    end
end

seed_db_w_vices(vicedata)

sub = Subscription.create(user_id: chris.id, vice_id: 27, status: "Active")
