class AddFirebaseidToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :firebase_id, :string
  end
end
