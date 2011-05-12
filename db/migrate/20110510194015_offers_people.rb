# Join table between people and offers
class OffersPeople < ActiveRecord::Migration
  def self.up
    create_table :offers_people, :id => false do |t|
      t.references :offer
      t.references :person
    end    
  end

  def self.down
  end
end
