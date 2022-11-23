class CreatePetSexes < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_sexes do |t|

      t.references :sex, null: false, foreign_key: true
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
