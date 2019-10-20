// Search from array of objects

const myTodos = ["Buy Chocolate", "Capture something", "Watch Horn"];
// console.log(myTodos.indexOf("Buy Chocolate"));

// let's create array of objects
const newTodos = [
  {
    title: "Buy Chocolate",
    isDone: false
  },
  {
    title: "Capture Something",
    isDone: true
  },
  {
      title:"Watch Horn",
      isDone:false
  }
];

// const search = newTodos.findIndex(function(todo, index) {
//   console.log(todo);
// //   console.log(index);
//   return todo.title === "Capture Something";
// });
// console.log(search);

// //Searching given title in the list of objects array using 'findIndex Method' *It returns index of the found element
// const findTodo = function(todo, title) {
//   const search = todo.findIndex(function(innerTodo, index) {
//     return innerTodo.title.toLowerCase() === title.toLowerCase();
//   });
//   return search
// };

// let printMe = findTodo(newTodos, "Capture Something");
// console.log(printMe);

//Using find Method array.find()
const findTodo2 = function(todoList, title) {
  const search = todoList.find(function(todo, index) {
    if (todo.title) {
      return todo.title.toLowerCase() === title.toLowerCase();
    }
    return console.log('This TODO not found ');
    ;
  });
  if(search!=undefined){
    // return search
  return ` Your "${title}" todo found in ${todoList.indexOf(search)+1} place`;
}
  return `TODO ${title} not found in your list || You can add this todo to your list`
};
let printMe = findTodo2(newTodos, "buy chocolte");
console.log(printMe);