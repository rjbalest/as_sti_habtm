class EmployeesController < PeopleController
  active_scaffold :employee do |conf|
    conf.columns = [:type, :name, :email, :boss, :department, :offers]
    conf.update.columns = [:name, :email, :boss, :department, :offers]
    conf.create.columns = [:name, :email, :boss, :department, :offers]
  end
end 
