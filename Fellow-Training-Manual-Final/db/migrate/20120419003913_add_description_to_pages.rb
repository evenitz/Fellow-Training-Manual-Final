class AddDescriptionToPages < ActiveRecord::Migration
  def change
    add_column :pages, :description, :string 
  end
end
