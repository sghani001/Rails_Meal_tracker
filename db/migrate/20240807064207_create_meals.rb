class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.string :meal
      t.date :date

      t.timestamps
    end
  end
end
