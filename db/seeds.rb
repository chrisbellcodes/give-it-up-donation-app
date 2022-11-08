# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require 'smarter_csv'
require 'stripe'

Stripe.api_key = ENV['STRIPE_SECRET']

User.destroy_all
Vice.destroy_all
Category.destroy_all
Subscription.destroy_all

# Imports vicedata for creating vices
vicedata = SmarterCSV.process(Rails.root.join('lib', 'seeds', 'simplified-vice-list(10-29-22).csv'))


# Seed Categories
    # [TODO] add nickname and description to cats
smoking = Category.create(name: "Smoking")
fast_foods = Category.create(name: "Fast Foods")
bev_non = Category.create(name: "Beverages: Non-alcoholic")
memberships = Category.create(name: "Memberships")
gambling = Category.create(name: "Gambling")
sweets = Category.create(name: "Sweets")
bev_al = Category.create(name: "Beverages: Alcoholic")
misc = Category.create(name: "Misc.")
lifestyle = Category.create(name: "Lifestyle")

# Stripe Creators
def create_stripe_price_obj (vice, stripe_product_id)
    price = Stripe::Price.create(
        {
            nickname: vice[:name],
            unit_amount: vice[:amount].to_i * 100,
            currency: 'usd',
            recurring: {interval: 'month'},
            product: stripe_product_id,
        },
    )
    return price
end

def create_stripe_product vice
    product = Stripe::Product.create(
        {
            name: vice[:name],
            description: vice[:description]
        }
    )
    return product
end

# Seed Vices
def seed_db_w_vices vicedata

    vicedata.each do |vice|
        # create stripe product here
        product = create_stripe_product(vice)
        # create stripe price here
        price = create_stripe_price_obj(vice, product.id)

        Vice.create(
            name: vice[:name],
            category_id: Category.find_by(name: vice[:category]).id,
            amount: price.unit_amount/100,
            stripe_product_id: product.id,
            stripe_price_id: price.id
        )
    end

end

seed_db_w_vices(vicedata)





    

