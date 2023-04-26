class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.string :title
      t.datetime :from_date
      t.datetime :to_date
      t.text :note
      t.string :category

      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
