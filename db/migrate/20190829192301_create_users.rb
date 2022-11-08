# frozen_string_literal: true

class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :stripe_customer_id

      t.timestamps
    end
  end

end
