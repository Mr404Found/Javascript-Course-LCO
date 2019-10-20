// A normal function in JS

// const sayHello = function(name) {
//   return "hey there " + name + "!"
// };
// console.log(sayHello("john"))

//Reducing above block of code into a single line using arrow functions

const sayHello = name => `hey ${name}!`;

// console.log(sayHello("john wick"));

const myTodos = [
  {
    title: "Buy Chocolate",
    isDone: true
  },
  {
    title: "Capture Something",
    isDone: true
  },
  {
    title: "Watch Horn",
    isDone: false
  }
];

const thingsPending = myTodos.filter(todo => todo.isDone === true); //here todo is a single parameter,
// so we can skip adding of parenthesis
console.log('things which are yet to be done');

thingsPending.forEach(todo => console.log(todo.title))
// console.log(thingsPending);

