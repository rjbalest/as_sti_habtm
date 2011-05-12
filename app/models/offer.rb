class Offer < ActiveRecord::Base

  has_and_belongs_to_many :people, :join_table=>:offers_people

end
