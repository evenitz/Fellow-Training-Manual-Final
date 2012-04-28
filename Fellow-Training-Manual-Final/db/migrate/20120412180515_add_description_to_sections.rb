class AddDescriptionToSections < ActiveRecord::Migration
  def change
    add_column :sections, :description, :string

  end
end
