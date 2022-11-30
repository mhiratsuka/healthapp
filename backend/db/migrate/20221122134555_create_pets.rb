class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|

      t.string :name
      t.string :kind
      t.date :birthday

      t.references :user, null: false, foreign_key: true
      t.references :sex, null: false, foreign_key: true

      t.timestamps
    end
  end
end
