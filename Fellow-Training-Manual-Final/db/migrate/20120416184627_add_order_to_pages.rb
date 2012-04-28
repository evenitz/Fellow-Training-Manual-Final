class AddOrderToPages < ActiveRecord::Migration
  def change
    add_column :pages, :pageOrder, :integer
  end
end
