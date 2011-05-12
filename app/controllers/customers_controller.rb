class CustomersController < PeopleController
  active_scaffold :customer do |conf|
    conf.columns = [:type, :name, :email, :balance]
    conf.update.columns = [:name, :email, :balance]
    conf.create.columns = [:name, :email, :balance]
  end
end 
