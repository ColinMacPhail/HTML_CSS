class CreateProductLines < ActiveRecord::Migration
  def change
    create_table :product_lines do |t|

      t.timestamps null: false
    end
  end
end