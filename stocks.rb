require 'stock_quote'

puts "Which stock should I advise you on?"
stock_symbol = gets.chomp

stock = StockQuote::Stock.quote(stock_symbol)

if stock.open > 50
 puts "SELL!"
elsif stock.open < 30
 puts "BUY!"
else
 puts "HOLD"
end

puts "THIS IS AN ANNOYING AD. PLEASE UPGRADE IF YOU DON'T WANT TO SEE IT" * 10