class BuildingsController < ApplicationController
  def index
  @buildings =Unirest.get("https://data.sfgov.org/resource/75rg-imyz.json").body
  end
end
