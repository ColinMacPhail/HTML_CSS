class CreateAcoustics < ActiveRecord::Migration
  def change
    create_table :acoustics do |t|

      t.timestamps null: false
    end
  end
end
