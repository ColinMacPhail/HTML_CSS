class Brand < ActiveRecord::Base

  attr_accessor :id, :product_line, :electric, :acoustic

  def initialize(hash)
    @id= hash("id")
    @product_line= hash("product_line")
    @electric= hash("electric")
    @acoustic= hash("acoustic")
  end

  def self.find(id)
    @brands = Unirest.get("#{ENV['DOMAIN']}/brands/#{id}.json").body
    return Brand.new(brand_hash)

  end
  
  def 
    
  end
end
