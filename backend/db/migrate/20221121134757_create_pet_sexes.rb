class CreatePetSexes < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_sexes do |t|
      
      t.timestamps
    end
  end
end
