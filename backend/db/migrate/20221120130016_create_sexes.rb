class CreateSexes < ActiveRecord::Migration[6.1]
  def change
    create_table :sexes do |t|

      t.string :name, null: false
      t.string :code, null: false
      t.string :alias, null: false

      t.timestamps
    end
  end
end
