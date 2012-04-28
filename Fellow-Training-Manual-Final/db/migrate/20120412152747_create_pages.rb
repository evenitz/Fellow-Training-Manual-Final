class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :name
      t.string :html
      t.integer :topic_id

      t.timestamps
    end
  end
end
