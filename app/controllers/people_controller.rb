class PeopleController < ApplicationController
  active_scaffold :person do |conf|
    conf.columns = [:type, :name, :email, :offers]
    conf.sti_children = [:employee, :customer, :manager]
  end
end 
