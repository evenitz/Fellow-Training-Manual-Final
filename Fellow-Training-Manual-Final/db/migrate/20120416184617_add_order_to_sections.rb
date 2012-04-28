class AddOrderToSections < ActiveRecord::Migration
  def change
    add_column :sections, :sectionOrder, :integer
  end
end
