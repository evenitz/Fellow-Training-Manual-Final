class CreatePageProgresses < ActiveRecord::Migration
  def change
    create_table :page_progresses do |t|
      t.boolean :complete, :default => false
      t.boolean :accessible, :default => false
      t.integer :page_number
      t.integer :topic_progress_id

      t.timestamps
    end
  end
end
