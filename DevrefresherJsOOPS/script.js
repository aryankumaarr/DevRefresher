//! OOPS - Object Oriented Programming
//* Helps make code modular and scalable

// ANCHOR  FUNADAMENTALS

// class Class {
//   //class name should always start with Capital letters
//   constructor(name = "ClassName") {
//     // first thing that runs in a class is a constructor , basically builds the blue print of an obj made out of
//     // this class
//     this.name = name;
//   }
// }

// let someVariable = new Class(); //Has classname default as classname
// let someVariableWithParamIntheClass = new Class("Aryan"); //Has classname default as Aryan

// console.log(someVariable);
// console.log(someVariableWithParamIntheClass);

// ANCHOR  PROTOTYPE

//* Prototype is a blueprint object that stores all the methods and props for all instances of a class. Basically
//* a shared memory for all the instances instead of creating duplicate method for all different instances. Dont confuse
//* it with the constructor props which are different for all instances

// NOTE - this keyword follows parent values , in es6 function that is one level deep its window , es5 is parent
// NOTE - es6 2 levels or more deep is parent value

// ANCHOR  CALL, APPLY AND BIND

//* within a global fn the value of this is window , if u want to change that u use call apply and bind

// let obj = {
//   name: "Aryan",
//   Age: 21,
// };

// function printSomething(a,b,c) {
//   console.log(this,a,b,c);
// }

// printSomething();// vlaue is window

// printSomething.call(obj,1,2,3); // value of this is now the Object obj
// NOTE - structure of call is fn.call(theObjectUwantToSetAsThis, SetParams)

// printSomething.apply(obj,[8,2,3])
// NOTE - structure of apply is fn.apply(theObjectUwantToSetAsThis, [SetParams in an Array])

// let newPrintSomething = printSomething.bind(obj,5,2,3); //Bind doesnt run something but gives us a fucn instead to run
// NOTE - structure of bind is same as call just needs to be saved in a new var that will be run as a func

// newPrintSomething();

// ANCHOR 🏗️ Class Expressions

// * Definition
// Class expressions are classes assigned to variables.

//! Important
// Prefer class declarations:
//
// class Person {}
//
// because they are easier to read.
//
// Class expressions:
//
// let Person = class {};
//
// are not hoisted like normal class declarations.

// ANCHOR 👨‍👩‍👧 Inheritance

//* Inheritance allows one class to inherit properties and methods
//* from another class using the extends keyword.


//NOTE - This is a base class that can be used to extend other classes
// class Animal {
//   constructor() {
//     this.limbs = 4,
//     this.mouth = 1,
//     this.type = 'mammal'
//   }
//   eat(){};
//   breathe(){};
// }

// class Spider extends Animal{
// constructor() {
//     this.limbs = 8,
//     this.mouth = 2,
//     this.type = 'insect'
//   }
//   spreadWeb(){};
// }


//ANCHOR - Getters and setters 

//* Often used to access and modify private var

// class Account{
//   constructor(){
//     this._balance = 0; //NOTE - private valuea always start with an underscore
//   }

//   get balance(){
//     return this._balance
//   }

//   set balance(val){
//     this._balance = val;
//   }
// }

// let newAcc = new Account();
// console.log(newAcc.balance);
// newAcc.balance = 120000;
// console.log(newAcc.balance);



//!OOPS Practice Questions

// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

//NOTE - Answer

// class Car{
//   constructor(brand = undefined, speed = undefined){
//     this.brand = brand;
//     this.speed = speed;
//   }
  
//   drive(){
//     console.log(`The car is a ${this.brand} and goes upto a top speed of ${this.speed}`)
//   }
// }

// let car1= new Car("Lambo", 200);
// let car2 = new Car("Volkswagon", 100);

// console.log(car1,car2);
// car1.drive();
// car2.drive();


// ⸻

// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

//NOTE - Answer

// class Student{
//   constructor(name, rollNumber ){
//     if(name === undefined||name === null){
//       throw console.error("Cannot create student without a valid name");      
//     }
//     if(rollNumber === undefined||rollNumber === null){
//       throw console.error("Cannot create student without a valid roll Number");      
//     }
//     this.name = name;
//     this.rollNumber = rollNumber;
//   }

//   introduce(){
//     console.log(this.name,this.rollNumber);
//   }
// }

// let st1 = new Student('Aryan',12354);



// let obj = {
// func1 : function (){
//   console.log(this);
// },
// func2 :()=>{
//  console.log(this)
// }
// }

// obj.func1();
// obj.func2();

// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.

//NOTE - Answer 

// function User(id){
//   this.id = id;
//   this.login = function(){
//     console.log("User is logged in ");
//   }
// }

// User.prototype.login2 = ()=>{
//   console.log("User is logged in 2")
// }
// let us1 = new User(12);
// us1.login();
// us1.login2();

// let us2 = new User(13);

// console.log(us1.login === us2.login); //NOTE - returns false , because the login is unique for each unlike 
//NOTE login2 which is in the shared memory as a prototype fn , also keep in mind dont call the functions with () when comparing because that returns undef for both which will be true




// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.

//NOTE - Answer

function print(a=null,b=null){
  console.log(this.name,a,b);
}
let obj1 = {
  name: 'Aryan',
  age:20
}

print.call(obj1,2,3)
print.apply(obj1,[1,2]);
let fn = print.bind(obj1,[1,3]);
fn();


