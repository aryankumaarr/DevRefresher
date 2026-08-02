//!Promises , Async and Await

// ANCHOR - PROMISES
//* Promises - request to do a task , pending state - work is pending, resolved - work done , rejected - cant do the said work

// const prm = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject();
//     },3000)
// })

// prm.then(function(){
//     console.log("hello")
// })
// .catch(function(){
//     console.log("failed")
// })


fetch(`https://randomuser.me/api/`) 
.then((raw)=> raw.json())
.then(function(data){
    console.log(data.results[0].name.first)
})
.catch((err)=>{
    console.log(err)
})