class CreateElectrics < ActiveRecord::Migration
  def change
    create_table :electrics do |t|

      t.timestamps null: false
    end
  end
end
