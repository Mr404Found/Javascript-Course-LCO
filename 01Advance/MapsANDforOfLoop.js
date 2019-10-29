var wick = {
  name: "I am John Wick",
  age: 23,
  isAlive: true
};
var keanu = {
  name: "I am John keanu",
  age: 30,
  isAlive: true
};
var elon = {
  name: "I am elon musk",
  age: 20,
  isAlive: !true
};
var musk = {
  name: "I am musk melon",
  age: 18,
  isAlive: false
};
//creating new objects Map
let users = new Map();
// console.log(typeof users); //Here users is a object type
users.set("john", wick);
users.set("kiran", keanu);
users.set("sumanth", elon); //sumanth=key || elon =value
users.set("melo",musk);

console.log(users);
users.forEach((value, key) => console.log(key + " = " + value.name));





//let's write comments here


// console.log(users.size);
// console.log(users.get('sumanth')); //get('value')
// console.log(users.has('kiran'));
// console.log(users.keys());
// console.log(users.values());
for (const key of users.keys()) {
     console.log(key);
  //Above log statement will give the following output as keys
  //   john;
  //   kiran;
  //   sumanth;
}

for (const value of users.values()) {
  //   console.log(value.age);
  //   console.log(value.name);
  //   console.log(value.isAlive);
  //   console.log("printing each value of key is successful");
}

// for (const [key, value] of users.entries()) {
//   console.log(key + "=" + value.name);
//   // console.log(key + "=" + value); //value is a object
// }

// console.log(typeof users);

//Using forEach Loop


//lets create new ARRAY map
var arrayofArr = [["one", 1], ["two", 2], ["three", 3]];

let nums = new Map(arrayofArr); //directly passing arrayofArray into MAP() it converts as key=>value pair automatically
// console.log(nums);

// nums.forEach((value, key) => console.log(key + "=" + value));

for (const [key, value] of nums.entries()) {
  // console.log(key + "=" + value);
}






//exercise on this keyword in javascript
let createObject = {
  day: "Sunday",
  prs: 0,
  mergedprs: 0,

  addMeeting:function(meetsAdded){
      createObject.prs=this.prs+meetsAdded
      return `${this.prs}`
  }
};
console.log(createObject.addMeeting(5))

