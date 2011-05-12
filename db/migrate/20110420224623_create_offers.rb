class CreateOffers < ActiveRecord::Migration
  def self.up
    create_table :offers do |t|
      t.string :type
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps
    end
  end

  def self.down
    drop_table :offers
  end
end
