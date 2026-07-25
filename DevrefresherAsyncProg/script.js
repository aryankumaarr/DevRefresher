//! Asynchronous programming

//ANCHOR - Asynchrony and Callbacks

//* Asynchrony is the way of running a piece of code separately compared to the other toprevent freezing
//* the app when it waits for some conditions to be met.
//* Callback -> function is a function passed as an argument into another function, which is then invoked inside that outer function to complete an action

//SECTION - Callback code examples
// function abcd(fn) {
//   fn();
// }

// abcd(() => {
//   console.log("hello");
// });

//NOTE - You can also increase the depth of the callbacks as follows

// function abcd2(fn) {
//   fn(function (fn2) {
//     fn2();
//   });
// }

// abcd2(function (fn3) {
//   fn3(function () {
//     console.log("heyyyyy");
//   });
// });

//SECTION - Some more callback examples

// Github repo data -

// let github = {
//   username: "aryanKumar",
//   userID: 1,
//   repos: [["repo1"], ["repo2"], ["repo3"]],
// };

// getUserDetails(username , callback)

// function getUserDetails(username, cb) {
//   setTimeout(() => {
//     cb(username);
//   }, 2000);
// }

// getUserDetails(github.username, function (details) {
//   console.log(`User is ${details}`);
// });

// getallReposData(userID , callback)

// function getallReposData(userID, cb) {
//   setTimeout(() => {
//     if(userID === github.userID){
//        cb(null , github.repos); 
//     }else{
//        cb('WrongID', null)
//     }
//   }, 1000);
// }

// getallReposData(1,function(err,details){
//     console.log(details);
// });
// getallReposData(2,function(err,details){

//     if(err){
//         console.error("wrong ID Bud")
//         return;
//     }
//     console.log(err,details);
// });

// NOTE - this is called error first callback pattern , u user callbacks as cb(error,dets);
// success case only displays dets and error case displays error

// getRepoDetails(repos[0] , callback)

// function getRepoDetails(repoIndex , cb){
//     setTimeout(() => {
//     cb(github.repos[repoIndex])
//   }, 3200);
// }

// getRepoDetails(1,function(details){
//     console.log(details);
// });

//ANCHOR 6: Callback Functions Practice Questions -
 
//TODO - Create a function AfterDelay Requirements -parameters time and a callback fn , prints callback executed after a certain time 
//Answer - 
// function AfterDelay(time , cb){
// setTimeout(()=>{
// cb();
// },time)
// }

// AfterDelay(3000, ()=>{console.log("Callback exec")});

//TODO - Create a function AfterDelay Requirements -parameters username and a callback after 1 sec , callback gets another
//user post functions getUserPosts uses userID and cb as params and cb gives us an array of posts 
//Answer - 
function getUser(username,cb){
  console.log("FETCHING USER DETAILS......")
  setTimeout(()=>{
    cb({id:1,username:'Aryan'});
  },1000)
  
}

function getUserPosts(userID,cb){
  setTimeout(()=>{
    cb(['hi','hello'])
  },2000);
}

getUser('Aryan', function(data){
  getUserPosts(data.id,function(allposts){
    console.log(data.username,allposts);
  })
})
