require 'rspec'

class Calculator
  def add(number_one, number_two)
    return number_one + number_two
  end

  def subtract(number_one, number_two)
    return number_one - number_two
  end

  def multiply(number_one, number_two)
    return number_one * number_two
  end

  def divide(dividend, divisor)
    return dividend / divisor
  end

  def square(number)
    return number * number
  end

  def power(number, exponent)
    return number ** exponent
  end
end



RSpec.describe Calculator do 
  describe '#subtract' do
    it 'should return the remainder of the two numbers' do
      calc = Calculator.new
      remainder = calc.subtract(6,4)
      expect(remainder).to eq(2)
    end
  end

  describe '#divide' do
    it 'should return the the quotient of the two numbers' do
      calc = Calculator.new
      quotient = calc.divide(30, 6)
      expect(quotient).to eq(5)
    end
  end

  describe '#sqaure' do
  it 'should return the square of the two numbers' do
    calc = Calculator.new
    square = calc.square(6)
    expect(square).to eq(36)
  end
end

  describe '#power' do
    it 'should return the number ** exponent' do
    calc = Calculator.new
    power = calc.power(2,3)
    expect(power).to eq(8)
  end
end

describe '#cube' do
  it 'should return the cube of one number' do
  calc = Calculator.new
  cube = calc.cube(2)
  expect(cube).to eq(8)
  end
end









end