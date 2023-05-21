// sample inputs
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;
// calculations
var totalDue = foodCost + tax + tip;
// output

console.log(
    "Food cost is " + foodCost + " and tax is " + tax);   
console.log("Tip is " + tip);
console.log("Total Due is " + totalDue);


var assets = 2000;
var debts = 400;

var netWorth = assets - debts;
console.log("assets are " + assets + " and debts are " + debts);
console.log(
    "My networth is " + netWorth)

var length = 5;
var width = 6;

var area = length * width;
console.log("To find the area of a rectangle multiply " + length + " and " + width);
console.log("The area of the rectangle is " + area);

var foodCost = 60.45;
var foodTax = 4.23;
var tipPercentage = 0.2;

var foodTip = (foodCost + foodTax) * tipPercentage;

console.log ("The total of the bill is " + foodCost + " and the tax is " + foodTax + " while the tip is " + tipPercentage);
console.log ("The tip based on the bill is " + Math.round(foodTip))

//var price = 7.99;
//var taxRate = .0825;
//var tax = price * taxRate;

//tax = Math.round(tax * 100) / 100; 

var faranHeit = 80;

var celsiusDegrees = 0.56 * (80 - 32);

console.log(faranHeit + " degrees Faranheit is " + Math.round(celsiusDegrees * 100) / 100 + " degrees Celsius");

var monthlySalary = 1000
var taxPercentage = .23

var taxes = 1000 * .23

console.log("I get " + taxes + " dollars worth of taxes taken out of my monthly check")

var payRate = 15.04;
var hoursWorked = 25;

var grossPay = payRate * hoursWorked;

console.log("After working " + hoursWorked + " hours a week with a pay rate of " + payRate + " , I earned " + grossPay + " dollars ");

if (hoursWorked > 40) {
    console.log("Full time employee")
} else {
    console.log ("Part time employee")
}

var incomeRange1 = 8000;
var incomeRange2 = 25000;

if (incomeRange1 < 12000 ) {
    console.log("Tax Rate is 5%")
} else {
    console.log("Tax Rate is over 5%")
}

    //let Fullname = "Laura Savinon";
   // let address = "4378 creekside blvd";
    //let city = "kissimmee";
   // let state = "florida";

    //displayMailingLabel(Fullname, address, city, state)

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 *1000))

//function displayWeekdayMottos() {
 //console.log("Make it Happen Monday!")
 //console.log("Tackle it Tuesday!")
// console.log("Finish it Friday!")
//}
 
//displayWeekdayMottos()

function favoriteThings() {
console.log("Laura Savinon")
console.log("Clueless")
console.log("Romeo Santos")
}

favoriteThings()

//This is the function
function whyImHere() {
 let message = "I wanted a new career opportunity!";
 console.log(message);
}

whyImHere()

function favoritePlace() {
    let message = "My favorite place is Paris because of the Eiffel Tower.";
    console.log(message);
}

favoritePlace()

function name(parameter1, parameter2 /* could be more */) {
    // code to executed
   }

   function display(msg) { // msg is the parameter
    console.log(msg)
   }
   
   function displayNameAndAge(name, age) {
    let message = name + " is " + age;
    console.log(message);
   }
   // elsewhere
   let someName = "Ezra";
   let someAge = 17;

   function displayMailingLabel(name, address, city, state, zip) {
    console.log ("Whitney Jackson", "123 Busy Lane", "Bethlehem", "Pennsylvania", 18018);
   }

   displayMailingLabel()

   function addNumbers(num1, num2) {
    let message = num1 + num2;
    console.log(message)
   }
   
   let num1 = 6;
   let num2 = 5;

   addNumbers(num1, num2)

  
