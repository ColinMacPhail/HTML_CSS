Skip to content
 
 
Search…
All gists
GitHub
New gist @ColinMacPhail
  Star 0
  Fork 0
  @peterxjangpeterxjang/inheritance_example.rb
Created 2 months ago
Embed  
<script src="https://gist.github.com/peterxjang/e9b69b4de36b2c41ef4b.js"></script>
  Download ZIP
 Code  Revisions 1
Raw  inheritance_example.rb
class Car
  def initialize
    @speed = 0
    @direction = 'north'
  end

  def brake
    @speed = 0
  end

  def accelerate
    @speed += 10
  end

  def turn(new_direction)
    @direction = new_direction
  end

  def honk_horn
    puts "Beeeeeeep!"
  end
end

class Bike
  def initialize
    @speed = 0
    @direction = 'north'
  end

  def brake
    @speed = 0
  end

  def accelerate
    @speed += 10
  end

  def turn(new_direction)
    @direction = new_direction
  end

  def ring_bell
    puts "Ring ring!"
  end
end
 @ColinMacPhail
           
Write  Preview

Leave a comment
Attach files by dragging & dropping,  Choose Files selecting them, or pasting from the clipboard.
 Styling with Markdown is supported
Comment
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help