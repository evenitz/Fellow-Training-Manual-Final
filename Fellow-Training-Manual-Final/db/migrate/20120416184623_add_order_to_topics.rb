class AddOrderToTopics < ActiveRecord::Migration
  def change
    add_column :topics, :topicOrder, :integer
  end
end
