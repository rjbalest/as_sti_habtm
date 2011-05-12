class OffersController < ApplicationController

  active_scaffold :offer do |conf|
    conf.columns = [:name]
  end

end
