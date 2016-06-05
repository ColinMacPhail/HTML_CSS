class TreesController < ApplicationController
  def index
    @canopies = Unirest.get()
end
