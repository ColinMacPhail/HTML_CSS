class BrandsController < ApplicationController
  def index
  
    @brand= Brand.all
    end
  end


  def show
    @brand = Brand.find(params[:id])
  end






  def create
     @brand = Unirest.post("#{ENV['DOMAIN']}/brands.json", headers: {"Accept" => "application/json"}, parameters: {brand: params[:brand], product_line: params[:product_line]}, electric: params[:electric], acoustic: params[:acoustic]).body
    redirect_to "/employees/#{@employee['id']}"
  end

  def update
    @brand = Unirest.patch("#{ENV['DOMAIN']}/brand/#{params[:id]}.json", headers: {"Accept" => "application/json"}, parameters: {brand: params[:brand], product_line: params[:product_line], electric: params[:electric], acoustic: params[:acoustic]}).body
    redirect_to "/brands/#{@brand['id']}"
  end

  def new
  end


  def destroy
    Unirest.delete("#{ENV['DOMAIN']}/brands/#{params[:id]}")
    redirect_to "/brands"
  end

  

  

end

