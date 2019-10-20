//parsing json data steps
//first let's create a object
const student = {
  name: "john",
  age: 25,
  isAlive: true
};
// console.log(student.age)

// convert this object into a string uisng stringify to be stored in local storage
const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString); //string type
//storing data or string into localstorage
localStorage.setItem("StuData", studentObjToString);
// again converting string into JSON to access values in json
const stringTOjson = JSON.parse(studentObjToString);
console.log(typeof stringTOjson); // object type

//now we can access the elements of stringTOjson object
// let's do that fucking thing
console.log(stringTOjson.isAlive);
console.log(stringTOjson.age);
// document.body.innerHTML = '';