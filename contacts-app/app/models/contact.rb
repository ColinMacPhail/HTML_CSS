class Contact < ActiveRecord::Base

   def contacts_split
    contacts.split(",")
  end

  def friendly_updated_at
    updated_at.strftime("%m/%d/%Y")
  end

  def friendly_create_time
    minutes= create_time / 60
    secaonds = create_time % 60
    p minutes
    p seconds
    result =""
    result +="#{minutes} minutes" if minutes > 0
    result += "#{seconds} seconds" if seconds >0
  end
end

