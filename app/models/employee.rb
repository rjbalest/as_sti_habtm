class Employee < Person
  belongs_to :boss, :class_name => 'Manager' , :foreign_key => :report_to
  belongs_to :department
end
