class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.references :user, foreign_key: true
      t.string :status
      t.references :vice, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
