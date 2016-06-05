class ContactsController < ApplicationController

  def first_name
    @first_name = "first_name"
  end

  def last_name
    @last_name = "last_name"
  end

  def email
    @email = "email"
  end

  def address
    @address = "address"
  end


  def phone_number
    @phone_number = "phone_number"
  end

  def index
    @contacts = Contact.all
  end

  def new

  end

  def create
    address = params[:address]
    # do something with addresss
     coordinates = Geocoder.coordinates(address)
    @contact = Contact.new(first_name: params[:first_name], middle_name: params[:middle_name],last_name: params[:last_name], email: params[:email], address: params[:address], phone_number: params[:phone_number], latitude: coordinates[0], longitude: coordinates[1])
    @contact.save
    flash[:success] = "Contact created."
    redirect_to "/contacts/#{@contact.id}
  
    @contact.save
  end

   "

  def show
   @contact = Contact.find_by(id: params[:id])

 end

 def edit

 end

 def coordinates
  @coordinates = Geocoder.coordinates(@contact.address)

end




end
end
