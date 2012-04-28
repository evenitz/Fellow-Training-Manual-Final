class CreateSectionProgresses < ActiveRecord::Migration
  def change
    create_table :section_progresses do |t|
      t.integer :user_progress_id
      t.integer :section_num
      
      t.boolean :accessible, :default => false

      t.timestamps
    end
  end
end
