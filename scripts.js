console.log("Hi!");

//FUNCTIONS -- a type of object

function myFirstFunction() {
  console.log("I just called my first function");
}

myFirstFunction();

function double(num) {
  // num = parameter
  return num * 2;
}

console.log(double(2)); // but what we pass through parenthesis when we call
// function is called an "argument"

function funcWithParams(num1, num2) {
  console.log(num1 + num2);
}

funcWithParams(5, 8);

// the parameter is essentially an unassigned variable or undefined
// and the argument is the actual value assigned to the variable when we call the function

// now two strings as parameters and log to console

function sayhello(greeting, subject) {
  return console.log(`${greeting}, ${subject}`);
}

// pass in arguments

sayhello("Hello", "everyone!");
//output to console

function sayGoodbye(farewell, subject) {
  return console.log(`${farewell}, ${subject}`);
}

sayGoodbye("Goodbye", "everyone!");

//could also assign variables in advance in this

let sayHello = "Hello";
let batman = "Batman";

function helloBatman() {
  // alert("I'm batman!") // generally code is read top down so this alert needs to
  // closed to continue
  return console.log(`${sayHello}, ${batman}!`);
}

helloBatman();

/////////////////////////////

const llamas = funcWithParams(3, 4); // we can assign a variable to calling a function
// and passing in arguments

if (llamas === 7) {
  console.log("right!");
} else {
  console.log("wrong!");
}

//// exercise time

// create function that takes in a string and returns false if the string is empty and
// true if it is not (empty string = false)

//log result to browser console.

// function truthyOrFalsy(value) {
//     if (value == false) {
//        return console.log("This value is falsy")
//     } else {
//         return console.log("This value is truthy")
//     }
// }

function truthyOrFalsy(value) {
  if (value == false) {
    return false;
  } else {
    return true;
  }
}

console.log(truthyOrFalsy(""));
console.log(truthyOrFalsy(0));
console.log(truthyOrFalsy(null));
console.log(truthyOrFalsy(undefined));
console.log(truthyOrFalsy(NaN));
console.log(truthyOrFalsy(false));
console.log(truthyOrFalsy("string"));

// Why does null, undefined, and NaN return as true?

// tutor answer

function isStringEmpty(string) {
    const stringToCheck = string;
    if (stringToCheck === "") {
        return true;
    } else {
        return false;
    }
}

console.log(isStringEmpty("Hi"));
console.log(isStringEmpty(""));

//functions in objects

//JavaScript has 1st class functions --> we can stick functions is multiple places

// a function can be named after it's assigned key as part of an object property

const person = {
    firstName: "John",
    lastName: "Rosser",
    greeting(name) {
        console.log(`Hi ${name}!`)
    }
}

person.greeting("Max") // we can then pass in a string as an argument using . method

person.greeting(person.firstName) //or we can call a property from the object and pass it in
// using . method twice

//// hard exercise coming ////


function halfNumber(num) {
    let halvedNumber = num/2
 return halvedNumber
}

let num = 4

console.log(`Half of ${num} is ${halfNumber(num)}`);

function timeInSeconds(minutes) {
    const seconds = minutes*60;
    return seconds
}

let minutes = window.parseInt(prompt("Enter in your time in minutes", "")) // parseInt will 
// convert a string containing a number into a number (the first number is comes across)

alert(`${minutes} minutes is ${timeInSeconds(minutes)} seconds`);

// function timeInSeconds(timeInMinutes) { // Guillermo Domber method
//   return console.log(`${timeInMinutes} minutes is ${timeInMinutes*60} seconds`);
// }

console.log("Good MORNING".toLowerCase()); // makes string lower case
const myString = "            GoOd MORninG" 
console.log(myString.toUpperCase()); // all to upper case
console.log(myString.trim()); // gets rids of spaces around string

// prompts() instructs browser to display a dialog prompting the user to input some text















