class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.integer :capacity
      t.string :room_number
      t.float :price
      t.boolean :availability
      t.boolean :ada
      t.boolean :smoking
      t.belongs_to :reservation, foreign_key: true

      t.timestamps
    end
  end
end
