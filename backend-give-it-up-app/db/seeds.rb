# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require 'stripe'
require 'csv'
require 'byebug'
Stripe.api_key = "sk_test_5jh2avArQnW4c1z9BOCwxNUu00VuZoIYRw"

def delete_plans_from_stripe #currently only deletes 10 at a time
    plans = Stripe::Plan.list()
    plans.each do |plan|
        Stripe::Plan.delete(plan.id)
    end
end

delete_plans_from_stripe()

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


# Seed Stripe with Plans
def seed_stripe_w_plans
    vices = Vice.all
    vices.each do |vice|
        price = vice.amount
        price*=100
        plan = Stripe::Plan
        plan.create({
            nickname: vice.name,
            amount: price, # 3 digits == $X.XX, This also must be a fixed amount. Can NOT pass a params for this value.
            currency: 'usd',
            interval: 'month',
            product: 'prod_H3qIm7DlE17qt9', # Can be found in Stripe daskboard - there is only one product
            metadata: {
                "v_description": vice.description,
                "v_category_id": vice.category_id
            }
        })
    end
end

seed_db_w_vices(vicedata)
seed_stripe_w_plans()

sub = Subscription.create(user_id: chris.id, vice_id: 27, status: "Active")
