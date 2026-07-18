// DOM - Document Object Model
// Accessing elements , query selector , queryselectorall , get element

// var navElement1 = document.querySelector('#navitem1')
// navElement1.innerHTML = 'Hello' //setting or changing value inside element

// querySelectorAll
// var allNavElements = document.querySelectorAll('.navitems');

// allNavElements.forEach(item=>{
//     item.textContent = "Hello";
// })

// remember to use foreach if u refer to multiple items with the same classname or something

// getElemnent by id or class

// var btn = document.getElementsByClassName('button_1')[0];
// // now instead of the loop u can also use array index like this to select something becasue js will always return
// // a collection if ure using methods that have a multiple name like queryselectorALL or getelemntbyClassName

// // incase of getelemnt byid or queryselector u can just set as needed without loop or array index
// btn.style.color = "red";

// adding event listener
// btn.addEventListener('click',function(){
//     console.log("Hello");
// })

// -- CREATING ELEMENTS -- //
// var h1 = document.createElement('h1');
// console.log(h1)

// -- APPEND ELEMENTS -- //

// var greet = document.createElement('h1')
// greet.innerHTML='hello'

// var main = document.querySelector('#main')
// main.appendChild(greet)+

// -- Making a random ELEM generator -- //

// var btn = document.querySelector("#genBtn");

// btn.addEventListener("click", () => {
//   var randomElement = document.createElement("div");
//   var body = document.querySelector("body");
//   console.log(randomElement);
//   var c1 = Math.floor(Math.random() * 1000);
//   var c2 = Math.floor(Math.random() * 1000);
//   var c3 = Math.floor(Math.random() * 1000);
//   var x = Math.ceil(Math.random() * 100);
//   var y = Math.ceil(Math.random() * 100);
//   var rotationAngle = Math.random()*360;

//   randomElement.style.transform = `rotate(${rotationAngle}deg)`;
//   randomElement.style.height = "4rem";
//   randomElement.style.width = "6rem";
//   randomElement.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//   randomElement.style.position = "absolute";
//   randomElement.style.top = y + "%";
//   randomElement.style.left = x + "%";
//   body.appendChild(randomElement);
// });


