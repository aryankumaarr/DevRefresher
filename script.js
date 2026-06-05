// let count = 5;
// console.log(count);
// console.log(count++)
// console.log(count)
// console.log(++count)

// let count = 5;
// console.log(count);
// console.log(count--)
// console.log(count)
// console.log(--count)

// Function Hoisting - using the function before making it , only can be used if its declared as this not as
// a function within a var const or let in that case the let goes in the temporal dead zone and gives u
// a reference error
// hello();

// function hello(){
//     console.log("function is running")
// }

// // Var hoisting - should give a ref error since js treats it as vara ; cloga ; a=10
// console.log(a); // undefined

// var a = 10;

// // Conditional Operators

// // if(){}else{} - everyone and their mom knows this
// // condtion ? true:false
// 12>13?console.log(true):console.log(false)
// // Switch Case - gives statement referred to that case if not resolves to default
// switch("whatever number you would like"){
//     case 1 :
//         console.log("1")
//         break;
//     case 2 :
//         console.log("2")
//         break;
//     case 3 :
//         console.log("3");
//         break;
//     default:
//         console.log("default");
// }

// // Loops
// // for loops
// for(i=1;i<5;i++){
//     console.log(i)
// }
// for (i=22;i<33;i++){
//     console.log(i);
// }
// for(i=30;i>5;i--){
//     console.log(i);
// }
// // Practicing some auth concepts using while - verifying password using ltd attempts
// let attempts = 0;
// let accountStatus = false;
// let key = "Aryan"

// let password = prompt("Enter a password").trim()
// attempts++;

// if(password === key) accountStatus = true , console.log("Account opened");

// while (password !== key) {
//   if (attempts == 3 && password !== key) {
//     console.error("Locked out");
//     break;
//   }
//   password = prompt("Enter a password");
//   if(password === key) accountStatus = true , console.log("Account opened");
//   attempts++;
// }

//  Loop Practice Question 2
// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let words = prompt("Type in some words").trim().toLowerCase();
// let yesCount = 0;

// while (words !== "stop" ) {
//   if (words === "yes") yesCount++;
//   words = prompt("Type in some words").trim().toLowerCase();
// }

// console.log("stopped loop");
// console.log(`yes used ${yesCount} amount of times`);

// // Print only first 3 numbers from 1 to 20 using a loop and add break after 3 odd prints.
// let oddCounter = 0;
// for (i = 0; i <= 20; i++) {
//   if (oddCounter === 3) break;
//   if (i % 2 != 0) {
//     console.log(i);
//     oddCounter++;
//   }
// }

// ask user for 5 numbers count how many positives , use loop conition and a counter
// let positiveCounter = 0;

// for(i=0;i<5;i++){1
//     let num = +prompt("Enter a number")
//     if(num>=0) positiveCounter++;
// }
//  console.log(`Number of Positives ${positiveCounter}`);

// Atm Sim: Allow 3 withdrawls , starting balance $1000 dollars, ask for withdrawing 3 times
// if Enough BAlance deduct if not log insufficient balance

// let balance = 1000;
// let withdrawlCount = 0;
// for (let i = 0; i < 3; i++) {
//   let withdrawingAmount = +prompt("Enter Amount");
//   if (balance === 0 || balance < withdrawingAmount) {
//     console.error("Insufficient Funds");
//     break;
//   }
//   if (balance >= withdrawingAmount) {
//     balance-= withdrawingAmount;
//     withdrawlCount++;
//   }
// }
// NAN , deposis and other things not handled yet 


// // IIFE imediately invoked function
// (function(){
// // used to create private variables that cant be accessed
// })();

// More Function Types in js - [Arrow, fat Arrow, Anonymous, Higher Order, Callback,
//  First Class , Pure Function, Impure Function]
// // Fat Arrow-
// let abcd = ()=>{
//     console.log("something")
// }
// // anonymous - no name 
// function(){}
// // Higher Order Function -> IF a functions returns a funtion or accepts a func as a param
// function abcd(){
//     return function(){

//     }
// }
// function efgh(a){

// }
// efgh(function(){

// });
// // Callback - function that calls a fucntion
// abcd(function(){

// })
// First Class Function -> functions can be used as variables 
// Pure Funtions - same input same output 
// Impure Funtions - same input different outputs each time

// Closure - if the returning function of a hof uses a variable from the  parent
