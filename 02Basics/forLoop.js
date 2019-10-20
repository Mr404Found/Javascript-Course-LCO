// const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // for loop

// for (let i = days.length - 1; i >= 0; i--) {
//   console.log(days[i]);
//   //   console.log(days.reverse());
// }

const todos = [];

todos.unshift("watch horn");
todos.push("algos"); // inserts element at the last of array
todos.unshift("train dataset"); //inserts elements at beginning

// todos.forEach(function(title, i) {
//   console.log(`Task ${i + 1} is : ${title} `);
// });

for (let i = 0; i < todos.length; i++) {
  console.log(`Task ${i + 1} is : ${todos[i]} `);
}
