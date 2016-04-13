class PagesController < ApplicationController

  def fortune
    fortunes = ["On no!", "You're in luck", "Don't look left"]
    @fortune = fortunes.sample
  end

  def lottery
    lottery_numbers = [1, 34, 35, 5]
    @lottery = lottery_numbers.sample
  end

  def bottles
    @song_lines = []
    bottle = 100
    while bottle > 0
      if bottle > 1
        @song_lines << "#{bottle-1}  bottles of beer on the wall #{bottle-1} bottles of beer, take one down, pass it around, #{bottle-1} bottles of beer on the wall" 
      elsif bottle >0
        @song_lines << "1 bottle of beer on the wall!"
      end
      bottle = bottle - 1
    end

  end

end





