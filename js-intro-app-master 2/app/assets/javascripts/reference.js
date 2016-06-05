// Introducing... JavaScript!

// RUBY CONSOLE
// puts "Hello"

// JAVASCRIPT CONSOLE
// console.log("Hello");



// RUBY VARIABLES
// x = "well, hello there!"
// puts x

// JAVASCRIPT VARIABLES
// var x = "well, hello there!";
// console.log(x);



// RUBY CONCATENATION
// x = "cat"
// y = "fish"
// puts "#{x}#{y}"

// JAVASCRIPT CONCATENATION
// var x = "cat";
// var y = "fish";
// console.log(x + y);



// RUBY NUMBERS
// x = 1
// y = 2
// z = 4.74
// puts x + y
// puts x + z

// JAVASCRIPT NUMBERS
// var x = 1;
// var y = 2;
// var z = 4.74;
// console.log(x + y);
// console.log(x + z);



// RUBY INCREMENT/DECREMENT
// x = 1
// x += 1
// puts x
// x -= 1
// puts x

// JAVASCRIPT INCREMENT/DECREMENT
// var x = 1;
// x++;
// console.log(x);
// x--;
// console.log(x);



// RUBY BOOLEANS
// x = true
// y = false
// puts x
// puts y

// JAVASCRIPT BOOLEANS
// var x = true;
// var y = false;
// console.log(x);
// console.log(y);



// RUBY ARRAYS
// people = ["Jane", "John", "Joan"]
// puts people[0]
// puts people[1]
// puts people[2]
//
// people << "Cookie Monster"
// puts people
// puts people.count

// JAVASCRIPT ARRAYS
// var people = ["Jane", "John", "Joan"];
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);
//
// people.push("Cookie Monster");
// console.log(people);
// console.log(people.length);



// RUBY HASHES
// person = { first_name: "John", last_name: "Doe", age: 50, eye_color: "blue" }
// puts person[:first_name]
// puts person.first_name   # DOESN'T WORK!!!
//
// x = :first_name
// puts person[x]
// puts person.x   # DOESN'T WORK!!!

// JAVASCRIPT OBJECTS (similar to Ruby hashes)
// var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
// console.log(person["firstName"]);
// console.log(person.firstName);
//
// var x = "firstName";
// console.log(person[x]);
// console.log(person.x);  // DOESN'T WORK!!!



// RUBY UNDEFINED VARIABLE
// x
// puts x

// JAVASCRIPT UNDEFINED VARIABLE
// var x;
// console.log(x);



// RUBY TYPE CHECK
// puts "John".class  # String
// puts 2.93.class  # Float
// puts false.class  # FalseClass
// puts {name:'John', age:34}.class  # Hash

// JAVASCRIPT TYPE CHECK
// console.log(typeof "John"); //string
// console.log(typeof 2.93);   //number
// console.log(typeof false);  //boolean
// console.log(typeof [1,2,3,4]); //object
// console.log(typeof {name:'John', age:34}); //object



// RUBY TYPE CONVERSION
// "234".to_i
// 234.to_s

// JAVASCRIPT TYPE CONVERSION
// parseInt("234");
// var num = 234;
// num.toString();



// RUBY CONDITIONALS
// if x > 50
//   puts "High number"
// elsif x < 25
//   puts "Low number"
// elsif x == 31
//   puts "My favorite number"
// else
//   puts "Medium number"
// end

// JAVASCRIPT CONDITIONALS:
// if (x > 50) {
//   console.log("High number");
// } else if (x < 25) {
//   console.log("Low number");
// } else if (x === 31) {
//   console.log("My favorite number");
// } else {
//   console.log("Medium number");
// }



// RUBY EQUALITY CHECK:
// 5 == 5  # true
// 5 == "5"  # false
// 5 != "5"  # true

// JAVASCRIPT EQUALITY CHECK:
// 5 == 5 // true
// 5 == "5" // true
// 5 === "5" // false
// 5 !== "5" // true
// 5 != "5" // false



// RUBY FALSEY:
// puts "WAT" if false
// puts "WAT" if nil

// JAVASCRIPT FALSEY
// if (false) { console.log("WAT"); }
// if (null) { console.log("WAT"); }
// if (undefined) { console.log("WAT"); }
// if (0) { console.log("WAT"); }
// if ("") { console.log("WAT"); }
// if (NaN) { console.log("WAT"); }



// RUBY RANDOM NUMBER
// rand(1..10)

// JAVASCRIPT RANDOM NUMBER
// Math.floor((Math.random() * 10) + 1);



// RUBY WHILE LOOPS
// i = 0
// text = ""
// while i < 10
//   text = text + " The number is " + i
//   i += 1
// end
// puts text

// JAVASCRIPT WHILE LOOPS
// var i = 0;
// var text = "";
// while (i < 10) {
//     text = text + " The number is " + i;
//     i++;
// }
// console.log(text);



// RUBY FOR LOOP
// for i in 0...10
//   puts i
// end

// JAVASCRIPT FOR LOOP
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// Logical equivalent of the above for loop:
// var i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }
//
// What the above for loop means in English:
// for(let's set an arbitrary variable called i to be set to 0;
// let's continue running the loop as long as i is less than 10;
// each time the loop runs, increase i by 1.)
// Essentially, this is a loop running 10 times, and in each pass through,
// i will be increased by 1. It starts at 0, and ends at 9.



// RUBY EACH THROUGH ARRAY
// words = ["apple", "banana", "carrot", "date", "escarole", "fig", "gourd", "hmm", "igloo", "jam", "kazoo", "lamp", "mouse"];
// words.each do |word|
//   puts word
// end

// JAVASCRIPT EACH THROUGH ARRAY
// var words = ["apple", "banana", "carrot", "date", "escarole", "fig", "gourd", "hmm", "igloo", "jam", "kazoo", "lamp", "mouse"];
// for (var i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }



// RUBY METHOD
// def say_hello
//   puts "Hello"
// end
// say_hello

// JAVASCRIPT FUNCTION (similar to Ruby methods, but still quite different, as you'll see later on.)
// function sayHello() {
//   console.log("Hello!");
// }
// sayHello();



// RUBY METHOD WITH PARAMETERS
// def add_two_numbers(number_one, number_two)
//   number_one + number_two
// end
// puts add_two_numbers(1, 99)

// JAVASCRIPT FUNCTION WITH PARAMETERS
// function addTwoNumbers(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }
// console.log(addTwoNumbers(1, 99));



// RUBY SCOPE
// x = "hello"
// def do_something
//   x = "Zebra"
// end
// do_something
// puts x

// JAVASCRIPT SCOPE
// var x = "hello";
// function doSomething() {
//   x = "Zebra";
// }
// doSomething();
// console.log(x);



// JAVASCRIPT CLASSICAL DEFINITION OF FUNCTION:
// function cool() {
//   console.log("A variable can contain a function!");
// }
// cool();
// console.log(typeof cool);

// JAVASCRIPT "FIRST CLASS CITIZEN" FUNCTION
// var cool = function() {
//   console.log("A variable can contain a function!");
// }
// cool();
// console.log(typeof cool);
//
// Functions can also, therefore, be one of the properties of an object
// var car = {
//   model: "Buick",
//   year: 2004,
//   miles: 20000,
//   printMessage: function() {
//     return this.model + " has done " + this.miles + " miles";
//   }
// };
// console.log(car["model"]);
// console.log(car.year);
// console.log(car.printMessage());
// console.log(car.printMessage);



// RUBY CLASS:
// class Car
//   attr_accessor :model, :year, :miles
//
//   def initialize(model, year, miles)
//     @model = model
//     @year = year
//     @miles = miles
//   end
//
//   def print_message
//     puts "#{model} has done #{miles} miles"
//   end
// end
//
// civic = Car.new("Honda Civic", 2009, 20000)
// mondeo = Car.new("Ford Mondeo", 2010, 5000)
// puts civic
// puts civic.year
// puts civic.print_message

// JAVASCRIPT CONSTRUCTORS (the closest thing to Ruby classes)
// function Car(model, year, miles) {
//   this.model = model;
//   this.year = year;
//   this.miles = miles;
//   this.printMessage = function() {
//     return this.model + " has done " + this.miles + " miles";
//   };
// }

// var civic = new Car("Honda Civic", 2009, 20000);
// var mondeo = new Car("Ford Mondeo", 2010, 5000);
// console.log(civic);
// console.log(civic.year);
// console.log(civic.printMessage());
