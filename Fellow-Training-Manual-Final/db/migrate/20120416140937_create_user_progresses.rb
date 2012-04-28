class CreateUserProgresses < ActiveRecord::Migration
  def change
    create_table :user_progresses do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
