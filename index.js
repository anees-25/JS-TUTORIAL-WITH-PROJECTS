//1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

//2. JavaScript console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("This is Warning");
console.error("This is Error");

// 3. JavaScript Variables
// What are Variables? -Variables are named containers that store data values. They act like little boxes with labels where you can keep information you want to use throughout your code.
/*
multi
lines
comment
*/
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
var num1 = 17;
var num1 = 25;

// String
var str1 = "This is a String";
var str2 = 'This is also a  String';

// Object
var marks = {
  Ahsan: 77,
  Fawad: 82,
  Anees: 99.98,
};
console.log(marks);
console.log(num1);

//Boleans

var a = true;
var b = false;
console.log(a, b);

// undefined variable
var name;
console.log(name); // This will output "undefined"

// Null Variable
var n = null;
console.log(n); // This will output "null"
/*
At a very high level, there are two types of data types in Javascript
1. Primitive data types:These are basic building blocks that represent simple values. They are immutable. include:
    -undefined
    -null
    -number
    -string
    -boolean
    -symbol
    2. Non-Primitive Data Types/Reference Data Types: These are more complex data structures that can hold collections of other values. They are mutable. include:
    -Arrays
    -Objects
    */
// Arrays
var arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]
console.log(arr[0]); // Output: 1

// Objects
var obj = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(obj); // Output: { name: 'John', age: 30, city: 'New York' }
console.log(obj.name); // Output: John
console.log(obj["age"]); // Output: 30

//    Operators in JavaScript
/*
here are some operators in JavaScript:

1. **Arithmetic Operators:**
   - `+` (Addition)
   - `-` (Subtraction)
   - `*` (Multiplication)
   - `/` (Division)
   - `%` (Modulus)
   - `++` (Increment)
   - `--` (Decrement)

2. **Assignment Operators:**
   - `=` (Assignment)
   - `+=` (Addition assignment)
   - `-=` (Subtraction assignment)
   - `*=` (Multiplication assignment)
   - `/=` (Division assignment)
   - `%=` (Modulus assignment)

3. **Comparison Operators:**
   - `==` (Equal)
   - `===` (Strict equal)
   - `!=` (Not equal)
   - `!==` (Strict not equal)
   - `>` (Greater than)
   - `<` (Less than)
   - `>=` (Greater than or equal to)
   - `<=` (Less than or equal to)

4. **Logical Operators:**
   - `&&` (Logical AND)
   - `||` (Logical OR)
   - `!` (Logical NOT)

5. **Conditional (Ternary) Operator:**
   - `condition ? expr1 : expr2`

6. **Type Operators:**
   - `typeof` (Returns the type of a variable)
   - `instanceof` (Checks if an object is an instance of a constructor)

7. **Bitwise Operators:**
   - `&` (Bitwise AND)
   - `|` (Bitwise OR)
   - `^` (Bitwise XOR)
   - `~` (Bitwise NOT)
   - `<<` (Left shift)
   - `>>` (Right shift)
   - `>>>` (Zero-fill right shift)

These operators perform various operations on values and variables in JavaScript. They are essential for building complex logic and calculations in your code.
*/
// Arithmatic Operators
var x = 34;
var y = 66;
console.log("The value of x+y is", x + y);
console.log("The value of x-y is", x - y);
console.log("The value of x*y is", x * y);
console.log("The value of x/y is", x / y);

// Addition
var sum = 5 + 3;
console.log(sum); // Output: 8

// Subtraction
var difference = 10 - 5;
console.log(difference); // Output: 5

// Multiplication
var product = 4 * 2;
console.log(product); // Output: 8

// Division
var quotient = 10 / 2;
console.log(quotient); // Output: 5

// Modulus (remainder of division)
var remainder = 10 % 3;
console.log(remainder); // Output: 1

// Increment
var num = 5;
num++;
console.log(num); // Output: 6

// Decrement
var num = 5;
num--;
console.log(num); // Output: 4
/*These examples demonstrate how to use the arithmetic operators in JavaScript to perform various calculations.*/

// Assignment Operators
var c = x;
console.log(c);
// now Update C
var c = x;
c += 5;
console.log(c);

// Assignment
var x = 10;
console.log(x); // Output: 10

// Addition assignment
var x = 10;
x += 5;
console.log(x); // Output: 15

// Subtraction assignment
var x = 10;
x -= 5;
console.log(x); // Output: 5

// Multiplication assignment
var x = 10;
x *= 2;
console.log(x); // Output: 20

// Division assignment
var x = 10;
x /= 2;
console.log(x); // Output: 5

// Modulus assignment
var x = 10;
x %= 3;
console.log(x); // Output: 1
/*
In the above examples, we use the assignment operators (=, +=, -=, *=, /=, %=) to perform various operations on the variable x. The output of each example demonstrates the result of the operation.*/

// Comparison Operators
var w = 30;
var z = 20;
console.log(w == z);
console.log(w >= z);
console.log(w <= z);
console.log(w > z);
console.log(w < z);

// Equal
var x = 5;
var y = 5;
console.log(x == y); // Output: true

// Strict equal
var x = 5;
var y = "5";
console.log(x === y); // Output: false (because the types are different)

// Not equal
var x = 5;
var y = 6;
console.log(x != y); // Output: true

// Strict not equal
var x = 5;
var y = "5";
console.log(x !== y); // Output: true (because the types are different)

// Greater than
var x = 10;
var y = 5;
console.log(x > y); // Output: true

// Less than
var x = 5;
var y = 10;
console.log(x < y); // Output: true

// Greater than or equal to
var x = 10;
var y = 10;
console.log(x >= y); // Output: true

// Less than or equal to
var x = 5;
var y = 5;
console.log(x <= y); // Output: true
/*
In the above examples, we use the comparison operators (==, ===, !=, !==, >, <, >=, <=) to compare two values and determine if they are equal, not equal, greater than, less than, greater than or equal to, or less than or equal to each other. The output of each example demonstrates the result of the comparison.
*/
var x = 5;
var y = 10;
var z = 15;
// Logical AND (&&)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// Logical OR (||)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical NOT (!)
console.log(!false);
console.log(!true);

// Logical AND (&&)
var x = 5;
var y = 10;
var z = 15;
console.log(x < y && y < z); // Output: true (because both conditions are true)

// Logical OR (||)
var x = 5;
var y = 10;
var z = 15;
console.log(x < y || y > z); // Output: true (because at least one condition is true)

// Logical NOT (!)
var x = 5;
console.log(!(x < 10)); // Output: true (because the condition is true, and the NOT operator reverses it)

// Combining logical operators
var x = 5;
var y = 10;
var z = 15;
console.log((x < y && y < z) || x > z); // Output: true (because at least one condition is true)
/*
In the above examples, we use the logical operators (&&, ||, !) to combine multiple conditions and evaluate the result. The output of each example demonstrates the result of the logical operation.
*/

// Function in Javascript
// DRY= Do not repeat youself
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
c1 = avg(4, 6);
c2 = avg(16, 28);
console.log(c1, c2);
/*
// This code defines a function called 'avg' that takes two parameters, 'a' and 'b'.
// Inside the function, it calculates the average of 'a' and 'b' by adding them together and dividing by 2.
// The result is stored in the variable 'c', which is then returned by the function.
// After defining the 'avg' function, two variables, 'c1' and 'c2', are assigned the results of calling the 'avg' function with different arguments.
// Finally, the values of 'c1' and 'c2' are logged to the console to see the calculated averages.
*/

// Conditional Operators
// This JavaScript code defines a variable 'age' with a value of 15. It then checks if the age is greater than 13 and prints out a message accordingly.

var age = 42;
if (age > 13) {
  console.log("You are not a Kid");
} else {
  console.log("You are a Kid");
}
// else if ladder
if (age > 22) {
  console.log("you are not a kid");
} else if (age > 12) {
  console.log("you are not a kid");
} else {
  console.log("you are a kid");
}
console.log("End of Ladder");

// for loop condition
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// for each loop condition

arr.forEach(function (element) {
  console.log(element);
});

// var example
function varExample() {
  // Declare a variable with function scope
  var x = 10;

  if (true) {
    // Redeclare x within the block scope, but it will not affect the outer x
    var x = 20;
    console.log(x); // Output: 20
  }

  console.log(x); // Output: 20
}

varExample();

// let example
function letExample() {
  // Declare a variable with block scope
  let y = 10;

  if (true) {
    // Try to redeclare y within the block scope, this will throw an error
    let y = 20; // Not allowed, y is already declared in the outer scope
    console.log(y); // This line will not be executed
  }

  console.log(y); // Output: 10
}

letExample();

// const example
function constExample() {
  // Declare a read-only reference to a value with block scope
  const PI = 3.14159;

  console.log(PI); // Output: 3.14159

  // Try to change the value of PI, this will throw an error
  PI = 3.14; // This will throw an error: "PI is read-only"

  if (true) {
    // Try to redeclare PI within the block scope, this will throw an error
    const PI = 2.71828; // Not allowed, PI is already declared in the outer scope
    console.log(PI); // This line will not be executed
  }

  console.log(PI); // Output: 3.14159
}

constExample();


// Example of a while loop

// Define an array
var arr = [1, 2, 3, 4, 5, 6, 7];

// Initialize a counter variable
var e = 0;

// Use a while loop to iterate through the array
while (e < arr.length) {
  // Print the current element of the array
  console.log(arr[e]);

  // Increment the counter variable
  e++;
}
/*
In this example, the while loop continues to execute as long as the condition k < arr.length is true. Inside the loop, the current element of the array is printed to the console, and the counter variable k is incremented by 1. Once the condition becomes false (when k is equal to or greater than the length of the array), the loop terminates, and the program continues with the next line of code.

This example demonstrates the basic structure and functionality of a while loop in JavaScript. It does not return any additional code beyond the immediate scope of the code block.
*/
// while
var x=0

while(x<10){
  console.log(x);
  x++;
}
//do while
var x=0
do{
console.log(x);
x++;
}
while(x<10);

// break statement

var arr=[1,2,3,4,5,6,7,8];
for(var i=0; i<arr.length;i++){
  if(i==2){
break;
  }
console.log(arr[i])}

// continue statement
var arr=[1,2,3,4,5,6,7,8];
for(var i=0; i<arr.length;i++){
  if(i==2){
continue;
  }
console.log(arr[i])}

// Array Methods
let myArr=["fan", "Camera", 25,null, true];
console.log(myArr.length)
// Pop
let myArr2=["fan", "Camera", 25,null, true];
myArr.pop();
console.log(myArr2)

// Shift
let myArr3=["fan", "Camera", 25,null, true];
myArr.shift();
console.log(myArr3)

// unShift Methods
let myArr4=["fan", "Camera", 25,null, true];
myArr.unshift("Chair");
console.log(myArr4)

// unshift using const variable
let myArr5 = ["fan", "Camera", 25, null, true];
const newLen = myArr.unshift("Chair");
console.log(myArr5);

// toString
let myArr6=["fan", "Camera", 25,null, true];
let mystring=myArr6.toString();
console.log(mystring)

// Strings Mehods in Javascript
let mylovelystring= "I am a boy"
console.log(mylovelystring.length)
console.log(mylovelystring.indexOf("a"));
onsole.log(mylovelystring.lastIndexOf("a"));
console.log(mylovelystring.slice(0,3));
console.log(mylovelystring.slice(1,4)); /*as we know n-1*/
console.log(mylovelystring.replace("am", "you")); 

// Date Objects in JavaScript
// Create a new Date object
var myDate = new Date();

// Get the time in milliseconds since January 1, 1970
console.log(myDate.getTime());

// Get the year
console.log(myDate.getFullYear());

// Get the day of the month (1-31)
console.log(myDate.getDate());

// Get the minutes (0-59)
console.log(myDate.getMinutes());

// Get the hours (0-23)
console.log(myDate.getHours());

// DOM Manipulation
let elem=document.getElementById('click');
console.log(elem);

let elemclass=document.getElementsByClassName('container');
console.log(elemclass);

// elemclass[0].style.background="green";
elemclass[0].classList.add("bg-primary");

elemclass[0].classList.remove("text-success");
// elemclass[0].innerHTML
// elemclass[0].innerText

console.log(elemclass[0].innerHTML)

console.log(elemclass[0].innerText)

let tn=document.getElementsByTagName('div');
console.log(tn);
createdElement=document.createElement('p')
createdElement.innerText="This is new paragrapgh line"
// createdElement.style.color="white"
tn[0].appendChild(createdElement)

createdElement2=document.createElement('b')
createdElement2.innerText="This is a created Bold"
tn[0].replaceChild(createdElement2,createdElement)

// removeChild
// Get the parent element
let parentElement = document.getElementById('parent');

// Get the child element to be removed
let childElement = document.getElementById('child');

// Remove the child element from the parent element
parentElement.removeChild(childElement);

// Each Lines of DOM Manipulation with comments

// Get the element with the ID "click" from the HTML document
let elem = document.getElementById('click');
console.log(elem);

// Get all elements with the class name "container" from the HTML document
let elemclass = document.getElementsByClassName('container');
console.log(elemclass);

// Add the CSS class "bg-primary" to the first element retrieved by class name
elemclass[0].classList.add("bg-primary");

// Remove the CSS class "text-success" from the first element retrieved by class name
elemclass[0].classList.remove("text-success");

// Log the inner HTML of the first element retrieved by class name
console.log(elemclass[0].innerHTML);

// Log the inner text of the first element retrieved by class name
console.log(elemclass[0].innerText);

// Get all div elements from the HTML document
let tn = document.getElementsByTagName('div');
console.log(tn);

// Create a new paragraph element
createdElement = document.createElement('p');

// Set the inner text of the new paragraph element
createdElement.innerText = "This is a new paragraph";

// Append the new paragraph element as a child of the first div element retrieved
tn[0].appendChild(createdElement);

// Create a new bold element
createdElement2 = document.createElement('b');

// Set the inner text of the new bold element
createdElement2.innerText = "This is a created Bold";

// Replace the new paragraph element with the new bold element as a child of the first div element retrieved
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); ---> removes an 

// Selecting using query
// Select the first element with the class "container"
let sel = document.querySelector('.container');
console.log(sel);

// Select all elements with the class "container"
sel = document.querySelectorAll('.container');
console.log(sel);


// Events in JAvaScript 
// function clicked(){
//     console.log("The button was clicked")
// }

// window.onload=function(){
//     console.log("The document was loaded")
// }

// firstcontainer.addEventListener('click', function(){
//     console.log("Clicked on First Container")
// })
// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse on First Container")
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of First Container")
// })

// firstcontainer.addEventListener('mouseup', function(){
//     console.log("Mouse up when clicked on First Container")
// })

// firstcontainer.addEventListener('mousedown', function(){
//     console.log("Mouse down when clicked on First Container")
// })
// let prevHTML= document.querySelectorAll('.container')[1].innerHTML
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//     console.log("Mouse up when clicked on First Container")
// })

// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
//     console.log("Mouse down when clicked on First Container")
// })

// Function declaration using the function keyword
function sum(a, b) {
  // Function body: returns the sum of a and b
  return a + b;
}

// Function expression using arrow function syntax
sum = (a, b) => {
  // Function body: returns the sum of a and b
  return a + b;
}

// Function declaration for logkaro function
logkaro = () => {
  // Function body: logs a message to the console
  console.log('I am lagkaro');
}

// setTimeout function call
// Calls the logkaro function after 3000 milliseconds (3 seconds)
setTimeout(logkaro, 3000);
logkaro= ()=>{
  console.log('I am lagkaro')
  document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
}
setTimeout (logkaro, 3000);
logkaro= ()=>{
  console.log('I am lagkaro')
}
setInterval (logkaro, 3000);

/*LocalStorage in Javascript*/
/*Above Code is writtem in browser console*/
localStorage.setItem('name', 'anees')
// Output:undefined
localStorage
// Output:Storage {name: 'anees', length: 1}
localStorage.getItem('name')
// Output:'anees