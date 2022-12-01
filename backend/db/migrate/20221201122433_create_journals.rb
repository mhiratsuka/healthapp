class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.string :title
      t.date :from_date
      t.date :to_date
      t.text :note
      t.string :category

      t.timestamps
    end
  end
end
