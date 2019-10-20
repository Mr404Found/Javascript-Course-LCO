let sayHello = function(name) {
  console.log("hey fuck");
  console.log(`hey ${name}`);
};

sayHello("john wick");

let multiplier = function(num, num1) {
  return num * num1;
};
console.log(multiplier(2, 3));

//Default parameters in javascript

let user = function(name = "unNamed", count = 0) {
  return "hello " + name + " ur course count is: " + count;
};
console.log(user("sam", 4));
