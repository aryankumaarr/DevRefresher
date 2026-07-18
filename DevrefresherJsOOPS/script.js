//! OOPS - Object Oriented Programming
//* Helps make code modular and scalable

// ANCHOR 📚 FUNADAMENTALS

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



// ANCHOR 🧬 PROTOTYPE

//* Prototype is a blueprint object that stores all the methods and props for all instances of a class. Basically
//* a shared memory for all the instances instead of creating duplicate method for all different instances. Dont confuse
//* it with the constructor props which are different for all instances

// NOTE - this keyword follows parent values , in es6 function that is one level deep its window , es5 is parent
// NOTE - es6 2 levels or more deep is parent value




// ANCHOR 🔄 CALL, APPLY AND BIND

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