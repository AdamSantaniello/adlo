class HomeController < ApplicationController
  def index
    flash["notice"] = "Welcome to Adlo!"
  end
end
