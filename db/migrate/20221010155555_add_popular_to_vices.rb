class AddPopularToVices < ActiveRecord::Migration[7.0]
  def change
    add_column :vices, :popular, :boolean
  end
end
