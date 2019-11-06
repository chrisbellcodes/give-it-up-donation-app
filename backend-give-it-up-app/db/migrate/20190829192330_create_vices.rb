class CreateVices < ActiveRecord::Migration[5.2]
  def change
    create_table :vices do |t|
      t.string :name
      t.string :description
      t.integer :amount
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
