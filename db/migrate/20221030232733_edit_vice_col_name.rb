class EditViceColName < ActiveRecord::Migration[7.0]
  def change
    rename_column :vices, :stripe_plan_id, :stripe_product_id
    rename_column :vices, :stripe_plan_interval, :stripe_price_id
  end
end
