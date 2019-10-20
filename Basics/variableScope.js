// var whoisuser = 'teacher'

// if(whoisuser == 'user'){
//     console.log("welcome user")
// }
// else{
//     console.log("verify your mail")
// }

// var keyword destroy local scope
//let keyword maintain scope

let iAmGlobal = "somethingGood";
let num = 5
if (3) {
  let iAmLocal = "LocalValue"; // var keyword destroy local scope
  //var is almost a global variable
  iAmGlobal = "somethingNasty";
  //Although global variable value changed in the local scope
  //changes will be reflected in every place
  console.log(iAmLocal);
  console.log(iAmGlobal);
}
// console.log(iAmLocal);
console.log(iAmGlobal); //A global variable value changed here
