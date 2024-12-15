class HomeController < ApplicationController
  def index
    flash["notice"] = "Hello Adlo!"
  end
end
