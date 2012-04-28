class CreateTopicProgresses < ActiveRecord::Migration
  def change
    create_table :topic_progresses do |t|
      t.boolean :accessible, :default => false
      t.integer :section_progress_id
      t.integer :topic_num

      t.timestamps
    end
  end
end
