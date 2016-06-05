class FixEmailAndLastName < ActiveRecord::Migration
  def change
    rename_column :contacts, :last_nameemail, :last_name
    add_column :contacts, :email, :string
  end
end
